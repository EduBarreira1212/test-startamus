import { fetchJokes } from '../_actions/fetch-jokes';

global.fetch = jest.fn();

describe('fetchJokes', () => {
    test('should return jokes when the API returns results', async () => {
        const mockJokes = [
            { id: '1', value: 'Joke 1' },
            { id: '2', value: 'Joke 2' },
        ];

        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({ result: mockJokes }),
        });

        const result = await fetchJokes('chuck');

        expect(result).toEqual(mockJokes);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/search?query=chuck',
        );
    });

    test('should return an empty list when the API does not find jokes', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({ result: [] }),
        });

        const result = await fetchJokes('chuck');

        expect(result).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/search?query=chuck',
        );
    });

    test('should return an empty list when there is an error in the API call', async () => {
        (fetch as jest.Mock).mockRejectedValue(new Error('Request failed'));

        const result = await fetchJokes('chuck');

        expect(result).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/search?query=chuck',
        );
    });

    test('should return an empty list when the API returns invalid data', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({}),
        });

        const result = await fetchJokes('chuck');

        expect(result).toEqual([]);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/search?query=chuck',
        );
    });

    test('should call console.error when there is an error in the API', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        (fetch as jest.Mock).mockRejectedValue(new Error('Request failed'));

        await fetchJokes('chuck');

        expect(consoleSpy).toHaveBeenCalledWith(new Error('Request failed'));

        consoleSpy.mockRestore();
    });

    test('should call the correct API URL', async () => {
        const mockJokes = [{ id: '1', value: 'Joke 1' }];

        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({ result: mockJokes }),
        });

        await fetchJokes('chuck');

        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/search?query=chuck',
        );
    });
});
