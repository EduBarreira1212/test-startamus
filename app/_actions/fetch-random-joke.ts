'use server';

import 'server-only';

export const fetchRandomJoke = async () => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();

        if (!data || !data.value) {
            return null;
        }

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
