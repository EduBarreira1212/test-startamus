import { fetchRandomJoke } from '../_actions/fetch-random-joke';

global.fetch = jest.fn();

describe('fetchRandomJoke', () => {
    test('should return a random joke when the API call is successful', async () => {
        const mockJoke = { id: '1', value: 'Random joke' };

        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockJoke),
        });

        const result = await fetchRandomJoke();

        expect(result).toEqual(mockJoke);
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/random',
        );
    });

    test('should return null when the API call fails', async () => {
        (fetch as jest.Mock).mockRejectedValue(new Error('Request failed'));

        const result = await fetchRandomJoke();

        expect(result).toBeNull();
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/random',
        );
    });

    test('should return null when the API returns invalid data', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({}),
        });

        const result = await fetchRandomJoke();

        expect(result).toBeNull();
        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/random',
        );
    });

    test('should call console.error when there is an error in the API', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        (fetch as jest.Mock).mockRejectedValue(new Error('Request failed'));

        await fetchRandomJoke();

        expect(consoleSpy).toHaveBeenCalledWith(new Error('Request failed'));

        consoleSpy.mockRestore();
    });

    test('should call the correct API URL', async () => {
        const mockJoke = { id: '1', value: 'Random joke' };

        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockJoke),
        });

        await fetchRandomJoke();

        expect(fetch).toHaveBeenCalledWith(
            'https://api.chucknorris.io/jokes/random',
        );
    });
});
