type LuckyJokeCardProps = {
    luckyJoke: string;
};

const LuckyJokeCard = ({ luckyJoke }: LuckyJokeCardProps) => {
    return (
        <div className="rounded border bg-white p-4 shadow">
            <p className="text-black">{luckyJoke}</p>
        </div>
    );
};

export default LuckyJokeCard;
