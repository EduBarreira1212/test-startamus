import React from 'react';

type HighlightTextProps = {
    text: string;
    highlight: string;
};

const HighlightText = ({ text, highlight }: HighlightTextProps) => {
    if (!text) {
        return <p className="text-black"></p>;
    }

    if (!highlight) {
        return <p className="text-black">{text}</p>;
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
        <p className="text-black">
            {parts.map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <mark key={index} className="bg-yellow-300">
                        {part}
                    </mark>
                ) : (
                    part
                ),
            )}
        </p>
    );
};

export default HighlightText;
