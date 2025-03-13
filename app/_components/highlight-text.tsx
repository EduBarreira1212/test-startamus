import React from 'react';

interface HighlightTextProps {
    text: string;
    highlight: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, highlight }) => {
    if (!highlight) return <p>{text}</p>;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
        <p className="text-black">
            {parts.map((part, index) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={index} className="bg-yellow-300">
                        {part}
                    </span>
                ) : (
                    part
                ),
            )}
        </p>
    );
};

export default HighlightText;
