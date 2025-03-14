import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import LuckyButton from '../_components/lucky-button';

describe('LuckyButton', () => {
    test('should render the button with correct text', () => {
        render(<LuckyButton handleLuckyBtnClick={jest.fn()} />);

        const button = screen.getByText(/i'm feeling lucky/i);

        expect(button).toBeInTheDocument();
    });

    test('should call handleLuckyBtnClick when clicked', () => {
        const handleLuckyBtnClick = jest.fn();
        render(<LuckyButton handleLuckyBtnClick={handleLuckyBtnClick} />);

        const button = screen.getByText(/i'm feeling lucky/i);

        fireEvent.click(button);

        expect(handleLuckyBtnClick).toHaveBeenCalledTimes(1);
    });
});
