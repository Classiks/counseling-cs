import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import StepParentCourse2 from "../assets/images/step-elterkurs-2.png";
import StepEncouragementScientist from "../assets/images/cartoon-encouragement-scientist.png";
// import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';
import { Helmet } from 'react-helmet';
import SignupButton from './SignupButton';
import VhsLocation from './VhsLocation';
import CourseNotAvailable from '../components/CourseNotAvailable';

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>STEP Kurse - Termine und Informationen</title>
            <meta name="description" content="Finden Sie alle aktuellen Termine und detaillierte Informationen zu den STEP-Elternkursen. Verbessern Sie Ihre Erziehungs- und Kommunikationsfähigkeiten für ein harmonisches Familienleben." />
        </Helmet>

        {/*
1.
Wie "Zwischen-Menschlichkeit heute“ mit dem STEP-Konzept gut gelebt werden kann… in Familie und Beruf.

Termin: 21.01.2025 von 19:30-21:00 Uhr 

Es ist allgemein bekannt, dass durch das Verinnerlichen des STEP-Trainings Eltern ihre Erziehungskompetenz stärken, gelingende und erfüllende Beziehungen mit ihren Kindern aufbauen, und ein kooperatives, stressfreieres Zusammenleben in der Familie erreichen können.

In dem gut ausgearbeiteten Programm werden u.a. die eigenen Wertevorstellungen, Ressourcen und Stärken (wieder oder neu) entdeckt und Schritt für Schritt hilfreiche „Tools“ angeboten, die ausprobiert und „personalisiert“ werden können.

Genau deshalb ist das Konzept – und das ist weniger bekannt - weit über ein „Familientraninig“ hinaus hilfreich für jede Art zwischenmenschlicher Beziehungen, so auch in der Partnerschaft und am Arbeitsplatz.

Spielerisch und humorvoll, mit Aha-Erlebnissen und Spaß in der Gruppe zeigt der Impulsvortrag auf, wie schon kleine Übungen oder „Tools“ des STEP-Konzepts viel bewegen können.
        */}

        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10 items-start">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">Wie "Zwischen-Menschlichkeit heute“ mit dem STEP-Konzept gut gelebt werden kann… in Familie und Beruf.</h1>
                    <h2>VHS-Kursnummer: 242105123</h2>
                </div>
                <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-Wie-Zwischenmenschlichkeit-heute-mit-dem-STEP-Konzept-gut-gelebt/242105123" />
                <div>
                    <p> Termin: Dienstag, 21.01.2025, 19:30-21:00 </p>
                    <VhsLocation room="102" />
                </div> 
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-step-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <div className="flex flex-col space-y-2">
                            <p>
                                Es ist allgemein bekannt, dass durch das Verinnerlichen des STEP-Trainings Eltern ihre Erziehungskompetenz stärken, gelingende und erfüllende Beziehungen mit ihren Kindern aufbauen, und ein kooperatives, stressfreieres Zusammenleben in der Familie erreichen können.
                            </p>
                            <p>
                                In dem gut ausgearbeiteten Programm werden u.a. die eigenen Wertevorstellungen, Ressourcen und Stärken (wieder oder neu) entdeckt und Schritt für Schritt hilfreiche „Tools“ angeboten, die ausprobiert und „personalisiert“ werden können.
                            </p>
                            <p>
                                Genau deshalb ist das Konzept - und das ist weniger bekannt - weit über ein „Familientraninig“ hinaus hilfreich für jede Art zwischenmenschlicher Beziehungen, so auch in der Partnerschaft und am Arbeitsplatz.
                            </p>
                            <p>
                                Spielerisch und humorvoll, mit Aha-Erlebnissen und Spaß in der Gruppe zeigt der Impulsvortrag auf, wie schon kleine Übungen oder „Tools“ des STEP-Konzepts viel bewegen können.
                            </p>
                        </div>
                    </Accordeon>
                </div>
            </div>
            <img src={StepEncouragementScientist} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>



        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">STEP-Elternkurs Teil 1</h1>
                    {/* <h2>VHS-Kursnummer: 241105120</h2> */}
                </div>
                {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-Teil-1/241105120" /> */}
                {/* <div>
                    <p> Termine: Dienstag, 15:00 - 17:00, wöchentlich </p>
                    <p> Kursstart: 09.04.2024 </p>
                    <p> Kursende: 14.05.2024 </p>
                    <VhsLocation room="302" />    
                </div> */}
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-step-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <p className="flex-1">
                            <ul className="[&_li]:list-disc [&_li]:ml-5">
                                <li>Einführungstreffen: Kennenlernen und Rahmen abstecken</li>
                                <li>
                                    Wir lernen, uns und unsere Kinder besser zu verstehen <br />
                                    Welcher Erziehungsstil wird uns helfen, unser Ziel zu erreichen? <br />
                                    Was können wir von unserem Kind erwarten? <br />
                                    Weshalb zeigt unser Kind Fehlverhalten? <br />
                                    Wie können wir ein besseres Verhältnis zu unserem Kind entwickeln?
                                </li>
                                <li>
                                    Unsere persönlichen Wertvorstellungen, Überzeugungen und Gefühle <br />
                                    Was können wir tun, wenn unser Kind Fehlverhalten zeigt? <br />
                                    Wodurch werden unsere Kinder entmutigt? <br />
                                    Woher kommen persönliche Wertvorstellungen und Überzeugungen? <br />
                                    Woher kommen Gefühle? <br />
                                    Wie können wir uns und unseren Kindern helfen?
                                </li>
                                <li>
                                    Wir ermutigen unsere Kinder und uns selbst <br />
                                    Wie können wir unser Kind ermutigen? <br />
                                    Was ist der Unterschied zwischen Lob und Ermutigung? <br />
                                    Gibt es andere Möglichkeiten der Ermutigung? <br />
                                    Entwickeln Sie den Mut, nicht perfekt zu sein
                                </li>
                                <li>
                                    Wir hören unseren Kindern zu <br />
                                    Wie können wir gute Zuhörer sein?
                                </li>
                            </ul>
                        </p>
                    </Accordeon>
                    {/* <DateAccordeon
                        className="bg-step-200 p-2 w-full"
                        dates={[
                            { day: "Dienstag", date: "09.04.2024" },
                            { day: "Dienstag", date: "16.04.2024" },
                            { day: "Dienstag", date: "30.04.2024" },
                            { day: "Dienstag", date: "07.05.2024" },
                            { day: "Dienstag", date: "14.05.2024" },
                        ]}
                    /> */}
                    <CourseNotAvailable />
                </div>
            </div>
            <img src={StepEncouragementGel} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>

        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">STEP-Elternkurs Teil 2</h1>
                    {/* <h2>VHS-Kursnummer: 241105121</h2> */}
                </div>
                {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-Teil-2/241105121" />
                <div>
                    <p> Termine: Dienstag, 15:00 - 17:00, wöchentlich </p>
                    <p> Kursstart: 25.06.2024 </p>
                    <p> Kursende: 23.07.2024 </p>
                    <VhsLocation room="302" />
                </div> */}
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-step-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <ul className="[&_li]:list-disc [&_li]:ml-5">
                            <li>
                                Wir reden mit unseren Kindern <br />
                                Wie können wir mit unserem Kind sprechen, so dass es uns zuhört?
                            </li>
                            <li>
                                Wir helfen unseren Kindern, zu kooperieren <br />
                                Wie können wir unseren Kindern helfen, zu kooperieren? <br />
                                Wie können wir und unser Kind gemeinsam Probleme lösen? <br />
                                Wie können »Familienkonferenzen« helfen, dass unser Kind kooperiert?
                            </li>
                            <li>
                                Sinnvolle Disziplin <br />
                                Sind Disziplin ausüben und Strafen das Gleiche? <br />
                                Wie üben wir Disziplin aus? <br />
                                Wie können wir Konsequenzen einsetzen?
                            </li>
                            <li>
                                Was machen wir, wenn…? <br />
                                Wie entscheiden wir, was wir tun sollen? <br />
                                Wie verhalten wir uns beim Thema »Schule«? <br />
                                Wie verhalten wir uns beim Umgang mit Medien? <br />
                                Wie verhalten wir uns bei anderen Problemen?
                            </li>
                            <li>
                                Abschluss: Wie geht es weiter? Gelerntes sichern. Weitere Schritte planen.
                            </li>
                        </ul>
                    </Accordeon>
                    {/* <DateAccordeon
                        className="bg-step-200 p-2"
                        dates={[
                            { day: "Dienstag", date: "25.06.2024" },
                            { day: "Dienstag", date: "02.07.2024" },
                            { day: "Dienstag", date: "09.07.2024" },
                            { day: "Dienstag", date: "16.07.2024" },
                            { day: "Dienstag", date: "23.07.2024" },
                        ]}
                    /> */}
                    <CourseNotAvailable />
                </div>
            </div>
            <img src={StepParentCourse2} alt="course image" className="hidden md:block w-72 object-contain rounded-md bg-white" />
        </div>
    </BlendingInDiv>
}

