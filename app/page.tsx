'use client';

import { Suspense, useState } from 'react';
import LuckyButton from './_components/lucky-button';
import SearchJoke from './_components/search-joke';
import LuckyJokeCard from './_components/lucky-joke-card';
import JokesCard from './_components/jokes-card';
import { fetchJokes } from './_actions/fetch-jokes';
import { fetchRandomJoke } from './_actions/fetch-random-joke';

export type Joke = {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
};

export default function Home() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);
    const [luckyJoke, setLuckyJoke] = useState<Joke | null>(null);
    const [jokes, setJokes] = useState<Joke[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        const data = await fetchJokes(query);
        setLuckyJoke(null);
        if (data.length === 0) {
            setError(true);
            setJokes([]);
            return;
        }
        setJokes(data);
        setError(false);
    };

    const handleLuckyBtnClick = async () => {
        setJokes([]);
        setError(false);
        const data = await fetchRandomJoke();
        setLuckyJoke(data);
    };

    return (
        <main className="flex h-screen w-full flex-col items-center gap-4 p-3">
            <h1 className="text-3xl">Piadas do Chuck Norris</h1>
            <SearchJoke
                handleSubmit={handleSubmit}
                query={query}
                setQuery={setQuery}
            />
            <LuckyButton handleLuckyBtnClick={handleLuckyBtnClick} />

            {luckyJoke && <LuckyJokeCard luckyJoke={luckyJoke} />}

            <section className="flex w-full flex-col items-center gap-4 overflow-auto">
                <Suspense
                    fallback={<p role="alert text-white">Carregando piadas...</p>}
                >
                    <ul className="flex w-full flex-col items-center gap-4">
                        {jokes.map((joke) => (
                            <li key={joke.id} className="flex w-full justify-center">
                                <JokesCard joke={joke} query={query} />
                            </li>
                        ))}
                    </ul>
                </Suspense>
            </section>

            {error && <p role="alert">Nenhuma piada encontrada.</p>}
        </main>
    );
}
