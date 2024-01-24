interface Props {
    title: string,
    notCentered?: boolean,
    poppins?: boolean,
}

const ColoredHeading = ({title, notCentered, poppins}: Props) => {
    return (
        <div className="relative">
            <div className={`text-black opacity-100 flex flex-col gap-5 max-w-[44rem] ${notCentered ? 'md:text-left text-center' : 'text-center'}`}>
                <h2 className={`sm:text-[42px] text-[2rem] ${!poppins ? 'font-dmSerif font-normal' : 'font-poppins font-medium'}`}>{title}</h2>
            </div>
            <div className={`absolute top-0 overflow-hidden opacity-0 w-[100%] text-transparent bg-clip-text bg-accent-orange flex flex-col gap-5 max-w-[44rem] ${notCentered ? 'md:text-left text-center' : 'text-center'}`}>
                <h2 className={`sm:text-[42px] text-[2rem] ${!poppins ? 'font-dmSerif font-normal' : 'font-poppins font-medium'}`}>{title}</h2>
            </div>
        </div>
    );
};

export default ColoredHeading;