import React from 'react';

type SearchJokeProps = {
    query: string;
    setQuery: (query: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

const SearchJoke = ({ handleSubmit, query, setQuery }: SearchJokeProps) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Busque uma piada"
                className="w-full rounded border p-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                type="submit"
                value="Buscar"
                className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
            />
        </form>
    );
};

export default SearchJoke;
