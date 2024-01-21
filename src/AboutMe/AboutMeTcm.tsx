import BlendingInDiv from "../components/BlendingInDiv"

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
        {/* Ich habe in Heidelberg Medizin studiert und mich von Anbeginn für die
chinesische Kultur und deren Denkansätzen interessiert. Die Philosophie
aus dem „Land der Mitte“ konnte ich durch die Weiterbildung
„Traditionelle Chinesische Medizin“ (TCM) vertiefen und zugleich die
Behandlungsmethoden des ganzheitlichen Heilkonzeptes erlernen. Über
20 Jahre war ich praktisch tätig, beginnend mit
Akupunkturbehandlungen, die ich dann zunehmend durch weitere
Methoden der TCM ergänzen konnte, denn die sogenannten „5 Säulen“
der chinesischen Medizin (verlinken mit der Erklärung der 5 Säulen)
verstärken sich gegenseitig und verbessern den Behandlungserfolg
deutlich. Auch Weiterbildungen in (westlicher) naturheilkundlicher
Medizin, Ernährungslehre, Phytotherapie und Aromatherapie gehören zu
meinem beruflichen Werdegang, womit mir ein großes Repertoire
ganzheitlicher Ansätze zur Verfügung steht.
Ich habe meinen Schwerpunkt vor einigen Jahren in die Prävention
verlagert. Das Vermitteln der Selbstfürsorge auf der Basis der
Naturheilkunde und der chinesischen Medizin liegt mir sehr am Herzen.
Mein Arbeitsschwerpunkt besteht darin, die Möglichkeiten der „Hilfe zur
Selbsthilfe“ zu vermitteln.
        <p>
            Ich heiße Cordelia Schulz, bin 1967 in Madrid/Spanien als dritte von sechs Geschwistern geboren und zum Medizinstudium nach Heidelberg gegangen – dort habe ich meinen Mann kennengelernt und lebe seitdem in Deutschland.
        </p>

        <p>
            Die Betreuung und Arbeit mit Kindern und Jugendlichen war und ist ein zentraler Teil meines (privaten und beruflichen) Lebens. Ich erfahre täglich, wie wichtig es ist, früh eine stabile Basis für ein gesundes, verantwortungsvolles und selbstbestimmtes Leben zu ermöglichen.
        </p>

        <p>
            Diese Erfahrung bezieht sich sowohl auf das Miteinander in meiner Familie (mit 4 erwachsenen Söhnen), als auch auf meine Tätigkeit als Ärztin.
        </p>

        <p>
            Das Konzept überzeugt mich, weil es klar und einfach einen Weg aufzeigt, wie wir
        </p>

        <ul className="list-disc list-inside mb-4">
            <li>gut zuhören,</li>
            <li>respektvoll miteinander umgehen,</li>
            <li>Kooperation leben,</li>
            <li>die Perspektive wechseln,</li>
            <li>freundlich und bestimmt Grenzen setzen,</li>
            <li>uns und unsere Kinder ermutigen können.</li>

        </ul>

        <p>
            Meine Elternkurse werden über die VHS Offenburg angeboten und sind in zwei aufeinander aufbauenden Kursen aufgeteilt. So kann das Konzept in Ruhe und Schritt für Schritt ausprobiert…. und in Übereinstimmung mit den eigenen Wertvorstellungen umgesetzt werden. 
        </p> */}

        <p>
            Ich habe in Heidelberg Medizin studiert und mich von Anbeginn für die chinesische Kultur und deren Denkansätzen interessiert. Die Philosophie aus dem „Land der Mitte“ konnte ich durch die Weiterbildung „Traditionelle Chinesische Medizin“ (TCM) vertiefen und zugleich die Behandlungsmethoden des ganzheitlichen Heilkonzeptes erlernen.
        </p>
        <p>
            Über 20 Jahre war ich praktisch tätig, beginnend mit Akupunkturbehandlungen, die ich dann zunehmend durch weitere Methoden der TCM ergänzen konnte, denn die sogenannten „5 Säulen“ der chinesischen Medizin (verlinken mit der Erklärung der 5 Säulen) verstärken sich gegenseitig und verbessern den Behandlungserfolg deutlich. Auch Weiterbildungen in (westlicher) naturheilkundlicher Medizin, Ernährungslehre, Phytotherapie und Aromatherapie gehören zu meinem beruflichen Werdegang, womit mir ein großes Repertoire ganzheitlicher Ansätze zur Verfügung steht.
        </p>
        <p>
            Ich habe meinen Schwerpunkt vor einigen Jahren in die Prävention verlagert. Das Vermitteln der Selbstfürsorge auf der Basis der Naturheilkunde und der chinesischen Medizin liegt mir sehr am Herzen. Mein Arbeitsschwerpunkt besteht darin, die Möglichkeiten der „Hilfe zur Selbsthilfe“ zu vermitteln.
        </p>
    </div>;
}