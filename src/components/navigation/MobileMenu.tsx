import Link from "next/link";

import Insta from '../../../public/socials/insta.svg';
import Linked from '../../../public/socials/linkedin.svg';
import Facebook from '../../../public/socials/facebook.svg';
import Image from "next/image";
import ListDisplay from "../inputs/ListDisplay";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
    scrollPosition: number,
    isOpen: boolean,
    white: boolean | undefined,
    tInicio: string,
    tServicios: string,
    tAbout: string,
    tContacto: string,
    locale: string
}

const MobileMenu = ({scrollPosition, isOpen, white, tAbout, tContacto, tInicio, tServicios, locale}: Props) => {
    const pathname = usePathname();

    const Services = [
        {
            title: 'Asesoramiento legal en metaverso e IA.',
            url: '/es/servicios/metaverso-e-ia'
        },
        {
            title: 'Asesoramiento en propiedad intelectual.',
            url: '/es/servicios/propiedad-intelectual'
        },
        {
            title: 'Asesoramiento en internet.',
            url: '/es/servicios/internet'
        },
        {
            title: 'Asesoramiento legal general.',
            url: '/es/servicios/asesoramiento-general'
        },
        {
            title: 'Emprendedores y nuevos proyectos.',
            url: '/es/servicios/emprendedores'
        },
    ];

    const ServicesEng = [
        {
            title: 'Legal Advice on Metaverse and AI.',
            url: '/en/servicios/metaverso-e-ia'
        },
        {
            title: 'Legal Advice on Intellectual Property.',
            url: '/en/servicios/propiedad-intelectual'
        },
        {
            title: 'Legal Advice on Internet.',
            url: '/en/servicios/internet'
        },
        {
            title: 'General Legal Advice.',
            url: '/en/servicios/asesoramiento-general'
        },
        {
            title: 'Entrepreneurs and New Projects.',
            url: '/en/servicios/emprendedores'
        },
    ];
    

    return (
    <div className="w-full h-full flex flex-col gap-[1.25rem] p-[0.62rem] text-base font-medium text-black">
        <Link href={'/' + (locale || '') + '/'}>{tInicio}</Link>
        <Link href={'/' + (locale || '') + '/about'}>{tAbout}</Link>
        <ListDisplay heading={tServicios} options={useLocale() === 'es' ? Services : ServicesEng}/>
        <Link href={'/' + (locale || '') + '/contacto'}>{tContacto}</Link>
        <span className="w-full h-[1px] bg-black/15"></span>
        <div className="flex gap-2 items-center justify-start mr-4">
            <Link href={pathname.replace('/en', '/es')} className={`${locale === 'es' ? 'font-semibold' : 'font-medium'}`}>ES</Link>
            <span className={`w-[1px] h-5 ${scrollPosition > 20 ? 'bg-black/70' : `${white ? 'bg-white/70' : 'bg-black/70'}` } `}></span>
            <Link href={pathname.replace('/es', '/en')} className={`${locale === 'en' ? 'font-semibold' : 'font-medium'}`}>EN</Link>
        </div>
        <span className="w-full h-[1px] bg-black/15"></span>
        <div className="flex gap-2">
            <Link href={'https://www.instagram.com/lmlegales/'} target="_blank">
                <Image src={Insta} alt="Instagram socials" className={`${scrollPosition > 20 ? 'filter-none' : `${(white && !isOpen) && 'filter invert-[100%]'}` }`}></Image>
            </Link>
            <Link href={'https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar'} target="_blank">
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