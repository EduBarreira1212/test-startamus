import HighlightText from './highlight-text';

type Joke = {
    joke: {
        categories: string[];
        created_at: string;
        icon_url: string;
        id: string;
        updated_at: string;
        url: string;
        value: string;
    };
    query: string;
};

const JokesCard = ({ joke, query }: Joke) => {
    return (
        <div key={joke.id} className="w-1/2 rounded border bg-white p-4 shadow">
            <HighlightText highlight={query} text={joke.value} />
        </div>
    );
};

export default JokesCard;
