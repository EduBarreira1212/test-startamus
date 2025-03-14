'use client';

import { useState } from 'react';
import LuckyButton from './_components/lucky-button';
import SearchJoke from './_components/search-joke';
import LuckyJokeCard from './_components/lucky-joke-card';
import JokesCard from './_components/jokes-card';
import { fetchJokes } from './_actions/fetch-jokes';
import { fetchRandomJoke } from './_actions/fetch-random-joke';
import Image from 'next/image';

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
    const [loading, setLoading] = useState(false);
    const [luckyJoke, setLuckyJoke] = useState<Joke | null>(null);
    const [jokes, setJokes] = useState<Joke[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        const data = await fetchJokes(query);
        setLuckyJoke(null);
        if (data.length === 0) {
            setError(true);
            setJokes([]);
            setLoading(false);
            return;
        }
        setJokes(data);
        setError(false);
        setLoading(false);
    };

    const handleLuckyBtnClick = async () => {
        setLoading(true);
        setJokes([]);
        setError(false);
        const data = await fetchRandomJoke();
        setLuckyJoke(data);
        setLoading(false);
    };

    return (
        <main className="flex h-screen w-full flex-col items-center gap-5 p-3">
            <h1 className="text-3xl">Piadas do Chuck Norris</h1>
            <section className="flex w-full justify-center gap-4">
                <SearchJoke
                    handleSubmit={handleSubmit}
                    query={query}
                    setQuery={setQuery}
                />
                <LuckyButton handleLuckyBtnClick={handleLuckyBtnClick} />
            </section>

            {luckyJoke && <LuckyJokeCard luckyJoke={luckyJoke} />}

            {loading && (
                <Image
                    src="/loading.svg"
                    alt="loading"
                    width={50}
                    height={50}
                    className="mt-5 animate-spin"
                />
            )}

            <section className="flex w-full flex-col items-center gap-4 overflow-auto">
                <ul className="flex w-full flex-col items-center gap-4">
                    {jokes.map((joke) => (
                        <li key={joke.id} className="flex w-full justify-center">
                            <JokesCard joke={joke} query={query} />
                        </li>
                    ))}
                </ul>
            </section>

            {error && <p role="alert">Nenhuma piada encontrada.</p>}
        </main>
    );
}
