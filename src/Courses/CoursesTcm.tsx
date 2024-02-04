import BlendingInDiv from '../components/BlendingInDiv';
import FitForSummer from "../assets/images/fit-for-summer-ai.png";
import DailyLife from "../assets/images/tcm-daily-family-life.png";
import ForYouAndMe from "../assets/images/tcm-for-you-and-me.png";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';
import { Helmet } from 'react-helmet';

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>TCM Kurse - Traditionelle Chinesische Medizin</title>
            <meta name="description" content="Informieren Sie sich über die angebotenen Kurse in Traditioneller Chinesischer Medizin (TCM) für Gesundheitspflege, Selbstfürsorge und präventive Methoden." />
        </Helmet>
        <div className="m-3 p-4 rounded-2xl  bg-tcm-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">Fit für den Sommer</h1>
                    <h2>VHS-Kursnummer: 241303017</h2>
                </div>
                <div>
                    <p> Termine: Mittwoch, 18:00 - 19:30</p>
                    <p> Ort: {<VhsLink />}  302 Seminarraum </p>
                    <p> Kursstart: 06.03.2024 </p>
                    <p> Kursende: 08.05.2024 </p>
                </div>
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-tcm-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <div>
                            <p>
                                In diesem Kurs erfahren Sie mehr über die chinesische Medizin und wie die hilfreichen Ansätze des Yang Sheng ("Lebenspflege") in den Alltag eingefügt werden können.
                            </p>
                            <p>
                                Es geht darum, den Winter gut abzuschließen und die Energien des Frühjahrs zu nutzen, um den Sommer gestärkt erleben zu können. Unter anderem folgende Fragen werden theoretisch und praktisch behandelt:
                            </p>

                            <ul className="[&_li]:list-disc [&_li]:ml-5">
                                <li>Welche Dehnungs- und Lockerungsübungen holen meinen Körper aus dem Winterschlaf?</li>
                                <li>Kann ich von der chinesischen Diätetik und der 5-Elemente-Küche unter Berücksichtigung meiner Essgewohnheiten "Nährendes" übernehmen?</li>
                                <li>Was ist chinesische Arzneimitteltherapie und hat sie mit der westlichen Phytotherapie etwas gemeinsam - was kann ich praktisch davon umsetzen?</li>
                                <li>Wie setze ich die Druck- und Punktmassage gezielt ein, um Blockaden zu lösen und mich freier zu bewegen?</li>
                            </ul>
                        </div>
                    </Accordeon>
                    <DateAccordeon
                        className="bg-tcm-200 p-2 w-full"
                        dates={[
                            { day: "Mittwoch", date: "06.03.2024" },
                            { day: "Mittwoch", date: "20.03.2024" },
                            { day: "Mittwoch", date: "10.04.2024" },
                            { day: "Mittwoch", date: "17.04.2024" },
                            { day: "Mittwoch", date: "24.04.2024" },
                            { day: "Mittwoch", date: "08.05.2024" },
                        ]}
                    />
                </div>
            </div>
            <img src={FitForSummer} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>

        <div className="m-3 p-4 rounded-2xl  bg-tcm-400 flex gap-x-10 items-start">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">Chinesische und naturheilkundliche Medizin einfach im Familienalltag</h1>
                    <h2>VHS-Kursnummer: 241303018</h2>
                </div>
                <div>
                    <p> Termin: Donnerstag, 11.04.2024, 9:00-11:00 </p>
                    <p> Ort: {<VhsLink />}  101 Seminarraum </p>
                </div>
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-tcm-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <p className="flex-1">
                            Nach einer kurzen Einführung in die 5 Säulen der Chinesischen Medizin werden ganzheitliche Methoden und Rezepte vermittelt, um gesund zu bleiben und gesund zu werden. Mit Hilfe von ausgewählten Qigong-Übungen, Ernährung nach den 5 Elementen, gezieltem Heilpflanzeneinsatz, Akupressur und Tuina (chinesischer Massage) kommen Groß und Klein gut durch die Erkältungszeit! 
                        </p>
                    </Accordeon>
                </div>
            </div>
            <img src={DailyLife} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>

        <div className="m-3 p-4 rounded-2xl  bg-tcm-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">Online: TCM für dich und mich</h1>
                    <h2>VHS-Kursnummer: 241303019</h2>
                </div>
                <div>
                    <p> Termin: Donnerstag, 16.05.2024, 17:00-18:30 </p>
                    <p> <span className="font-bold">Online</span>, Webinar Zoom 07, <VhsLink /></p>
                </div>
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-tcm-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <p className="flex-1">
                            Nach einer kurzen Einführung in die Grundlagen der Chinesischen Medizin werden einfache, aber wirkungsvolle Übungen, Methoden und Rezepte vermittelt, die helfen, das "Gute lange Leben" zu pflegen und in die "eigene Mitte zu finden
                        </p>
                    </Accordeon>
                </div>
            </div>
            <img src={ForYouAndMe} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>
    </BlendingInDiv>
}

function VhsLink() {
    return <a
        href="https://www.vhs-offenburg.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-slate-700"
    >
        VHS Offenburg
    </a>
}