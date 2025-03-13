'use client';

import { useState } from 'react';
import LuckyButton from './_components/lucky-button';
import SearchJoke from './_components/search-joke';
import LuckyJokeCard from './_components/lucky-joke-card';
import JokesCard from './_components/jokes-card';

type Joke = {
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
    const [jokes, setJokes] = useState<Joke[]>();
    const [error, setError] = useState(false);
    const [luckyJoke, setLuckyJoke] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            const response = await fetch(
                `https://api.chucknorris.io/jokes/search?query=${query}`,
            );

            const data = await response.json();
            setLuckyJoke('');
            if (data.total === 0) {
                setError(true);
                return;
            }
            setJokes(data.result);
        }
    };

    const handleLuckyBtnClick = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        setJokes([]);
        setError(false);
        setLuckyJoke((await response.json()).value);
    };

    return (
        <div className="flex h-screen w-full flex-col items-center gap-4 p-3">
            <h1 className="text-3xl">Piadas do Chuck Norris</h1>
            <SearchJoke
                handleSubmit={handleSubmit}
                query={query}
                setQuery={setQuery}
            />
            <LuckyButton handleLuckyBtnClick={handleLuckyBtnClick} />

            {luckyJoke && <LuckyJokeCard luckyJoke={luckyJoke} />}
            <div className="flex flex-col items-center gap-4 overflow-auto">
                {jokes &&
                    jokes.map((joke) => (
                        <JokesCard key={joke.id} joke={joke} query={query} />
                    ))}
            </div>
            {error && <p>Nenhuma piada encontrada.</p>}
        </div>
    );
}
