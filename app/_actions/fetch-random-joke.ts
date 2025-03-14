'use server';

import 'server-only';

export const fetchRandomJoke = async () => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
