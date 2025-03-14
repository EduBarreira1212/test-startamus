import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LuckyJokeCard from '../_components/lucky-joke-card';
import { Joke } from '../page';

describe('LuckyJokeCard', () => {
    const mockJoke: Joke = {
        id: '12345',
        value: 'This is a funny joke!',
        categories: ['humor'],
        created_at: '2024-03-13T12:00:00.000Z',
        updated_at: '2024-03-13T12:00:00.000Z',
        icon_url: 'https://example.com/icon.png',
        url: 'https://example.com/joke/12345',
    };

    test('should render the joke ID and value correctly', () => {
        render(<LuckyJokeCard luckyJoke={mockJoke} />);

        expect(screen.getByText(/ID:/i)).toBeInTheDocument();
        expect(screen.getByText(mockJoke.id)).toBeInTheDocument();
        expect(screen.getByText(mockJoke.value)).toBeInTheDocument();
    });

    test('should render categories correctly', () => {
        render(<LuckyJokeCard luckyJoke={mockJoke} />);

        expect(screen.getByText(/humor/i)).toBeInTheDocument();
    });

    test('should do not render categories if there are none', () => {
        const jokeWithoutCategories: Joke = {
            id: '67890',
            value: 'Another joke without a category!',
            categories: [],
            created_at: '2024-03-13T12:00:00.000Z',
            updated_at: '2024-03-13T12:00:00.000Z',
            icon_url: 'https://example.com/icon.png',
            url: 'https://example.com/joke/67890',
        };

        render(<LuckyJokeCard luckyJoke={jokeWithoutCategories} />);

        expect(screen.getByText(jokeWithoutCategories.value)).toBeInTheDocument();
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
});
