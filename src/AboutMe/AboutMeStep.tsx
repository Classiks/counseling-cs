import BlendingInDiv from "../components/BlendingInDiv"
import { Helmet } from "react-helmet";

import Portrait from "../assets/images/cs-portrait-standing.jpg";
import { twMerge } from "tailwind-merge";

export default function AboutMeStep() {
    return <BlendingInDiv>
        <Helmet>
            <title>Über Cordelia Schulz - Expertin für systemische Elternbildung (STEP)</title>
            <meta name="description" content="Lernen Sie Cordelia Schulz kennen, Dozentin für das STEP-Programm. Entdecken Sie ihre Philosophie und Ansätze, um Familien zu stärken." />
        </Helmet>
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
    return <div className={twMerge("[&_p]:mb-4", className)}>
        <p>
            Ich heiße Cordelia Schulz, bin 1967 in Madrid / Spanien als drittes von sechs Geschwistern geboren und zum Medizinstudium nach Heidelberg gegangen – dort habe ich meinen Mann kennengelernt und lebe seitdem in Deutschland.
        </p>

        <h2 className="text-lg font-medium my-2">
            Mein beruflicher Werdegang:
        </h2>
        <div className="grid grid-cols-5 [&_p]:p-1">
            <p>1993</p>
            <p className="col-span-4">
                Ärztliche Tätigkeit an der Klinik für Kinder- und Jugendpsychiatrie Hofheim (Beendigung mit Geburt des ersten Sohnes).
            </p>

            <p>1994 - 2002</p>
            <p className="col-span-4 ">
                Zeit für die Erziehung der Kinder und für
                <ul className="list-disc list-inside">
                    <li>das Unterrichten an Krankenpflegeschulen,</li>
                    <li>die fachliche Weiterbildung (Psychosomatik, Naturheilkunde und Chinesische Medizin),</li>
                    <li>ehrenamtliche Aufgaben (u.a. Organisation eines „Gesunden Schulfrühstücks“).</li>
                </ul>
            </p>

            <p>2002 - 2019</p>
            <p className="col-span-4">
                Ärztliche Praxis-Tätigkeit mit Traditioneller Chinesischer Medizin TCM.
            </p>

            <p>2019 - 2021</p>
            <p className="col-span-4">
                Kursangebote (in Präsenz- und Digitalformaten) an der VHS, Hausaufgabenbetreuung, Kernzeit- und Ferienbetreuung in der Grundschule, Mitarbeit an einem Mehrgenerationenprojekt.
            </p>

            <p>Seit 2022</p>
            <p className="col-span-4">
                Zertifizierte STEP-Trainerin.
            </p>
        </div>

        <h2 className="text-lg font-medium my-2">
            Warum ich mich für das Arbeiten mit STEP entschieden habe?
        </h2>
        
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

        <p>
            Wenn auch Sie den Mut haben, nicht perfekt zu sein, freue ich mich, Sie in meinem Kurs begrüßen zu dürfen.
        </p>


    </div>
}