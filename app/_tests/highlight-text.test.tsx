import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HighlightText from '../_components/highlight-text';

describe('HighlightText', () => {
    test('should render the full text without highlighting if no match', () => {
        render(<HighlightText text="This is a test text" highlight="hello" />);

        expect(screen.getByText('This is a test text')).toBeInTheDocument();
        expect(screen.queryByText('hello')).toBeNull();
    });

    test('should highlight the correct part of the text', () => {
        render(<HighlightText text="This is a test text" highlight="test" />);

        expect(screen.getByText(/This is a/i)).toBeInTheDocument();
        expect(screen.getByText('test')).toHaveClass('bg-yellow-300');
        expect(screen.getByText(/ text$/)).toBeInTheDocument();
    });

    test('should handle case-insensitive highlighting', () => {
        render(<HighlightText text="This is a test text" highlight="TEST" />);

        expect(screen.getByText(/This is a/i)).toBeInTheDocument();
        expect(screen.getByText('test')).toHaveClass('bg-yellow-300');
        expect(screen.getByText(/ text$/i)).toBeInTheDocument();
    });

    test('should do not highlight if highlight string is empty', () => {
        render(<HighlightText text="This is a test text" highlight="" />);

        expect(screen.getByText('This is a test text')).toBeInTheDocument();

        expect(screen.queryAllByRole('mark')).toHaveLength(0);
    });

    test('should render nothing if text is empty', () => {
        const { container } = render(<HighlightText text="" highlight="" />);

        const paragraph = container.querySelector('p');
        expect(paragraph).toBeInTheDocument();
        expect(paragraph!.tagName).toBe('P');
        expect(paragraph!.textContent).toBe('');
    });
});
