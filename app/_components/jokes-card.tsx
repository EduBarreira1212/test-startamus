import HighlightText from './highlight-text';
import { Joke as JokeType } from '../page';

type Joke = {
    joke: JokeType;
    query: string;
};

const JokesCard = ({ joke, query }: Joke) => {
    return (
        <section key={joke.id} className="w-1/2 rounded border bg-white p-4 shadow">
            <HighlightText highlight={query} text={joke.value} />
            {joke.categories.length > 0 && (
                <div className="mt-2 flex gap-2">
                    {joke.categories.map((category) => (
                        <span
                            key={category}
                            className="rounded bg-gray-200 px-2 py-1 text-gray-800"
                        >
                            Category: {category}
                        </span>
                    ))}
                </div>
            )}
        </section>
    );
};

export default JokesCard;
