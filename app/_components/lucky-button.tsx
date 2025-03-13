type LuckyButtonProps = {
    handleLuckyBtnClick: () => void;
};

const LuckyButton = ({ handleLuckyBtnClick }: LuckyButtonProps) => {
    return (
        <button
            onClick={handleLuckyBtnClick}
            className="cursor-pointer rounded bg-green-500 px-4 py-2 text-white"
            aria-label="Clique para uma piada aleatória"
        >
            I&apos;m Feeling Lucky
        </button>
    );
};

export default LuckyButton;
