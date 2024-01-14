import BlendingInDiv from "../components/BlendingInDiv"

import Portrait from "../assets/images/cs-portrait-standing.jpg";

export default function AboutMeStep() {
    return <BlendingInDiv>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-4 md:p-10">
            <div className="w-80 h-80 xs:w-96 xs:h-96 md:w-1/3 md:h-auto rounded-full overflow-hidden">
                <Image className="-translate-y-8 md:translate-y-0" />
            </div>
            <div className="md:w-2/3 bg-step rounded-lg p-4 shadow-lg">
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
        <p className="font-bold text-lg">
            Hallo und herzlich willkommen auf meiner Profilseite!
        </p>

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
            Warum ich mich für STEP entschieden habe?
        </p>

        <p>
            Das Programm baut auf fundierten wissenschaftlichen Erkenntnissen auf, ist gut strukturiert und arbeitet mit vielen praktischen Übungen. Der Erfahrungsaustausch innerhalb der Kursgruppe ist ein wichtiger Baustein; dabei wird berücksichtigt, dass jede Familie ihre individuellen Wertvorstellungen hat. Es macht richtig Freude, mithilfe des Kurses Schritt für Schritt ein vertrauensvolles und entspanntes Miteinander in der Familie umzusetzen, Humor ist dabei sehr willkommen!
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
            Auf diesem Weg möchte ich Sie gerne begleiten.
        </p>


    </div>;
}