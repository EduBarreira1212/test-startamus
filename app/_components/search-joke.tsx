import React from 'react';

type SearchJokeProps = {
    query: string;
    setQuery: (query: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

const SearchJoke = ({ handleSubmit, query, setQuery }: SearchJokeProps) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
            data-testid="search-form"
        >
            <label htmlFor="joke-search" className="sr-only">
                Buscar uma piada
            </label>
            <input
                id="joke-search"
                type="text"
                placeholder="Busque uma piada"
                className="w-full rounded border p-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Digite sua busca por piadas"
            />
            <button
                type="submit"
                className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
            >
                Buscar
            </button>
        </form>
    );
};

export default SearchJoke;
