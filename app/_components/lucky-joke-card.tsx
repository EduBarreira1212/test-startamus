import { Joke } from '../page';

type LuckyJokeCardProps = {
    luckyJoke: Joke;
};

const LuckyJokeCard = ({ luckyJoke }: LuckyJokeCardProps) => {
    return (
        <article className="max-w-[80%] rounded border bg-white p-4 shadow">
            <p className="text-black">{luckyJoke.value}</p>
            {luckyJoke.categories.length > 0 && (
                <div className="mt-2 flex gap-2">
                    {luckyJoke.categories.map((category) => (
                        <span
                            key={category}
                            className="rounded bg-gray-200 px-2 py-1 text-gray-800"
                        >
                            Category: {category}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
};

export default LuckyJokeCard;
