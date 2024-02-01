import BlendingInDiv from "../components/BlendingInDiv"
import { HashLink as Link } from "react-router-hash-link";

import Portrait from "../assets/images/cs-portrait-standing.jpg";

export default function AboutMeTcm() {
    return <BlendingInDiv>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-4 md:p-10">
            <div className="w-80 h-80 xs:w-96 xs:h-96 md:w-1/3 md:h-auto rounded-full overflow-hidden">
                <Image className="-translate-y-8 md:translate-y-0" />
            </div>
            <div className="md:w-2/3 bg-tcm-400 rounded-lg p-4 shadow-lg">
                <Description />
            </div>
        </div>
    </BlendingInDiv>
}

interface IImageProps {
    className?: string;
}
function Image({ className }: IImageProps) {
    return <img
        src={Portrait}
        alt=""
        className={className}
    />
}

interface IDescriptionProps {
    className?: string;
}
function Description({ className }: IDescriptionProps) {
    return <div className={"[&_p]:mb-4 " + className}>
        <p>
            Ich habe in Heidelberg Medizin studiert und mich von Anbeginn für die chinesische Kultur und deren Denkansätzen interessiert. Die Philosophie aus dem „Land der Mitte“ konnte ich durch die Weiterbildung „Traditionelle Chinesische Medizin“ (TCM) vertiefen und zugleich die Behandlungsmethoden des ganzheitlichen Heilkonzeptes erlernen.
        </p>
        <p>
            Über 20 Jahre war ich praktisch tätig, beginnend mit Akupunkturbehandlungen, die ich dann zunehmend durch weitere Methoden der TCM ergänzen konnte, denn die sogenannten <Link to="/tcm#5-saeulen-tcm" className="font-bold cursor-pointer">„5 Säulen“ der chinesischen Medizin</Link> verstärken sich gegenseitig und verbessern den Behandlungserfolg deutlich. Auch Weiterbildungen in (westlicher) naturheilkundlicher Medizin, Ernährungslehre, Phytotherapie und Aromatherapie gehören zu meinem beruflichen Werdegang, womit mir ein großes Repertoire ganzheitlicher Ansätze zur Verfügung steht.
        </p>
        <p>
            Ich habe meinen Schwerpunkt vor einigen Jahren in die Prävention verlagert. Das Vermitteln der Selbstfürsorge auf der Basis der Naturheilkunde und der chinesischen Medizin liegt mir sehr am Herzen. Mein Arbeitsschwerpunkt besteht darin, die Möglichkeiten der „Hilfe zur Selbsthilfe“ zu vermitteln.
        </p>
    </div>;
}