import Link from "next/link";

import Insta from '../../../public/socials/insta.svg';
import Linked from '../../../public/socials/linkedin.svg';
import Facebook from '../../../public/socials/facebook.svg';
import Image from "next/image";

interface Props {
    scrollPosition: number,
    isOpen: boolean,
    white: boolean | undefined,
}

const MobileMenu = ({scrollPosition, isOpen, white}: Props) => {
    return (
    <div className="w-full h-full flex flex-col gap-[1.25rem] p-[0.62rem] text-base font-medium text-black">
        <Link href={'/'}>Inicio</Link>
        <Link href={'/about'}>Sobre nosotros</Link>
        <div className="flex gap-2 items-center">
            <h2>Servicios</h2>
            <h2 className="rotate-0">{`>`}</h2>
        </div>
        <Link href={'/'}>Contacto</Link>
        <span className="w-full h-[1px] bg-black/30"></span>
        <div className="flex gap-2 items-center">
            <h2>Español</h2>
            <h2 className="rotate-0">{`>`}</h2>
        </div>
        <span className="w-full h-[1px] bg-black/30"></span>
        <div className="flex gap-2">
            <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
                <Image src={Insta} alt="Instagram socials" className={`${scrollPosition > 20 ? 'filter-none' : `${(white && !isOpen) && 'filter invert-[100%]'}` }`}></Image>
            </Link>
            <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                <Image src={Linked} alt="LinkedIn socials" className={`${scrollPosition > 20 ? 'filter-none' : `${(white && !isOpen) && 'filter invert-[100%]'}` }`}></Image>
            </Link>
            <Link href={'https://www.facebook.com/Lmlegales'} target="_blank">
                <Image src={Facebook} alt="LinkedIn socials" className={`${scrollPosition > 20 ? 'filter-none' : `${(white && !isOpen) && 'filter invert-[100%]'}` }`}></Image>
            </Link>
        </div>
    </div>
    );
};

export default MobileMenu;