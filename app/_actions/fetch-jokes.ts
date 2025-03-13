'use server';

import 'server-only';

export async function fetchJokes(query: string) {
    try {
        const res = await fetch(
            `https://api.chucknorris.io/jokes/search?query=${query}`,
        );
        const data = await res.json();
        return data.result || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
