import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JokesCard from '../_components/jokes-card';
import { Joke as JokeType } from '../page';

jest.mock('../_components/highlight-text', () => ({
    __esModule: true,
    default: ({ highlight, text }: { highlight: string; text: string }) => (
        <span>{text.replace(highlight, `[${highlight}]`)}</span>
    ),
}));

describe('JokesCard', () => {
    const mockJoke: JokeType = {
        id: '12345',
        value: 'This is a highlighted joke!',
        categories: ['funny'],
        created_at: '2024-03-13T12:00:00.000Z',
        updated_at: '2024-03-13T12:00:00.000Z',
        icon_url: 'https://example.com/icon.png',
        url: 'https://example.com/joke/12345',
    };

    test('should render the joke ID and text correctly', () => {
        render(<JokesCard joke={mockJoke} query="" />);

        expect(screen.getByText(/ID:/i)).toBeInTheDocument();
        expect(screen.getByText(mockJoke.id)).toBeInTheDocument();
        expect(screen.getByText(/This is a highlighted joke!/i)).toBeInTheDocument();
    });

    test('highlights search query inside the joke text', () => {
        render(<JokesCard joke={mockJoke} query="highlighted" />);

        expect(screen.getByText(/\[highlighted\]/i)).toBeInTheDocument();
    });

    test('should render categories correctly', () => {
        render(<JokesCard joke={mockJoke} query="" />);

        expect(screen.getByText(/funny/i)).toBeInTheDocument();
    });

    test('should do not render categories if there are none', () => {
        const jokeWithoutCategories: JokeType = {
            id: '67890',
            value: 'Joke without a category!',
            categories: [],
            created_at: '2024-03-13T12:00:00.000Z',
            updated_at: '2024-03-13T12:00:00.000Z',
            icon_url: 'https://example.com/icon.png',
            url: 'https://example.com/joke/67890',
        };

        render(<JokesCard joke={jokeWithoutCategories} query="" />);

        expect(screen.getByText(/Joke without a category!/i)).toBeInTheDocument();
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
});
