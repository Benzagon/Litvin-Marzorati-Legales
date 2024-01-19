import Nav from "@/components/Nav";
import ServiceBody from "@/components/sections/servicios/ServiceBody";
import ServiceHero from "@/components/sections/servicios/ServiceHero";

import { metaverseData } from "@/utils/servicePages-data";

export default function Metaverso() {
    const heroData = {
        title: 'Metaverso e Inteligencia Artificial',
        subtitle: 'Somos un estudio líder y visionario en el ámbito de la propiedad intelectual e inteligencia artificial.',
    }
    return (
        <>
            <div className="absolute -top-16 bg-no-repeat bg-center bg-[url('/assets/metaversoBg.png')] w-full h-[124vh] -z-50">
                <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-background"></div>
            </div>
            <Nav white={true}></Nav>
            <div className="z-10">
                <ServiceHero title={heroData.title} subtitle={heroData.subtitle}></ServiceHero>
                <ServiceBody data={metaverseData}/>
            </div>
        </>
    );
};