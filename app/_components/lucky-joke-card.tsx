import { Joke } from '../page';

type LuckyJokeCardProps = {
    luckyJoke: Joke;
};

const LuckyJokeCard = ({ luckyJoke }: LuckyJokeCardProps) => {
    return (
        <article className="max-w-[80%] rounded-lg border bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <p className="text-xl font-semibold text-gray-800">
                    ID:{' '}
                    <span className="font-normal text-gray-600">{luckyJoke.id}</span>
                </p>
            </div>
            <p className="mb-4 text-lg text-gray-900">{luckyJoke.value}</p>
            {luckyJoke.categories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {luckyJoke.categories.map((category) => (
                        <span
                            key={category}
                            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 transition duration-300 hover:bg-blue-200"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
};

export default LuckyJokeCard;
