import HighlightText from './highlight-text';
import { Joke as JokeType } from '../page';

type Joke = {
    joke: JokeType;
    query: string;
};

const JokesCard = ({ joke, query }: Joke) => {
    return (
        <section
            key={joke.id}
            className="w-full rounded-lg border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:w-1/2 lg:w-1/3"
        >
            <div className="mb-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                    ID: <span className="font-normal text-gray-600">{joke.id}</span>
                </p>
            </div>
            <HighlightText highlight={query} text={joke.value} />
            {joke.categories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {joke.categories.map((category) => (
                        <span
                            key={category}
                            className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 transition duration-300 hover:bg-indigo-200"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            )}
        </section>
    );
};

export default JokesCard;
