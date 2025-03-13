'use server';

import 'server-only';

export async function fetchRandomJoke() {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
