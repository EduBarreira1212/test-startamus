import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../page';
import { fetchJokes } from '../_actions/fetch-jokes';
import { fetchRandomJoke } from '../_actions/fetch-random-joke';

jest.mock('../_actions/fetch-jokes', () => ({
    fetchJokes: jest.fn(),
}));

jest.mock('../_actions/fetch-random-joke', () => ({
    fetchRandomJoke: jest.fn(),
}));

describe('Home Component', () => {
    test('should handle search joke submission successfully', async () => {
        const mockJokes = [
            {
                id: '1',
                value: 'Joke 1',
                categories: [],
                created_at: '',
                updated_at: '',
                icon_url: '',
                url: '',
            },
            {
                id: '2',
                value: 'Joke 2',
                categories: [],
                created_at: '',
                updated_at: '',
                icon_url: '',
                url: '',
            },
        ];
        (fetchJokes as jest.Mock).mockResolvedValue(mockJokes);

        render(<Home />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'chuck' } });

        fireEvent.submit(screen.getByTestId('search-form'));

        await waitFor(() => {
            expect(screen.getByText('Joke 1')).toBeInTheDocument();
            expect(screen.getByText('Joke 2')).toBeInTheDocument();
        });
    });

    test('should fetch and display a random joke on lucky button click', async () => {
        const mockLuckyJoke = {
            id: '3',
            value: 'Lucky Joke',
            categories: [],
            created_at: '',
            updated_at: '',
            icon_url: '',
            url: '',
        };
        (fetchRandomJoke as jest.Mock).mockResolvedValue(mockLuckyJoke);

        render(<Home />);

        fireEvent.click(screen.getByLabelText('Clique para uma piada aleatória'));

        await waitFor(() => {
            expect(screen.getByText('Lucky Joke')).toBeInTheDocument();
            expect(screen.getByText('3')).toBeInTheDocument();
        });
    });
});
