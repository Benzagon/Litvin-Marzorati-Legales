interface Props {
    title: string,
    subtitle: string,
}

const ServiceHero = ({title, subtitle}: Props) => {
    return (
        <div className="sm:pb-[24rem] pb-[18rem]">
            <div className="main-padding mt-64">
                <div className="flex gap-3 h-max">
                    <span className="w-[0.5rem] bg-gradient-to-b from-accent-orange to-accent-brown"></span>
                    <div className="text-white flex flex-col gap-3 max-w-[50rem]">
                        <h1 className="font-dmSerif font-normal 3xl:text-[4.75rem] 2xl:text-[4rem] sm:text-[3rem] text-[2.75rem] text-left">
                            {title}
                        </h1>
                        <h2 className="font-poppins sm:text-[1.5rem] text-[1.25rem] font-medium">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;