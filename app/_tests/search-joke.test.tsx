import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchJoke from '../_components/search-joke';

describe('SearchJoke', () => {
    test('should render input and button correctly', () => {
        render(
            <SearchJoke query="" setQuery={jest.fn()} handleSubmit={jest.fn()} />,
        );

        const input = screen.getByPlaceholderText('Busque uma piada');
        const button = screen.getByRole('button', { name: /buscar/i });

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('should update input value when typing', () => {
        const setQueryMock = jest.fn();
        render(
            <SearchJoke query="" setQuery={setQueryMock} handleSubmit={jest.fn()} />,
        );

        const input = screen.getByPlaceholderText('Busque uma piada');

        fireEvent.change(input, { target: { value: 'engraçada' } });

        expect(setQueryMock).toHaveBeenCalledWith('engraçada');
    });

    test('should call handleSubmit when form is submitted', () => {
        const handleSubmitMock = jest.fn();
        render(
            <SearchJoke
                query=""
                setQuery={jest.fn()}
                handleSubmit={handleSubmitMock}
            />,
        );

        const form = screen.getByTestId('search-form');
        fireEvent.submit(form);

        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    });
});
