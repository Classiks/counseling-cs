import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import StepParentCourse2 from "../assets/images/step-elterkurs-2.png";
import StepEncouragementScientist from "../assets/images/cartoon-encouragement-scientist.png";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';
import { Helmet } from 'react-helmet';
import SignupButton from './SignupButton';
import VhsLocation from './VhsLocation';
import CourseNotAvailable from '../components/CourseNotAvailable';
import { Card, CardContent } from '@/components/ui/card';

/*
TODO:
- neue Bilder
- VHS Kursnummer
- Seminarraum
- Richtige Links
- Mama Check
- Deploment
*/

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>STEP Kurse - Termine und Informationen</title>
            <meta name="description" content="Finden Sie alle aktuellen Termine und detaillierte Informationen zu den STEP-Elternkursen. Verbessern Sie Ihre Erziehungs- und Kommunikationsfähigkeiten für ein harmonisches Familienleben." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">STEP Kurse</h1>
        </div>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Wie "Zwischen-Menschlichkeit heute" mit dem STEP-Konzept gut gelebt werden kann… in Familie und Beruf.</h1>
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
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Es ist allgemein bekannt, dass durch das Verinnerlichen des STEP-Trainings Eltern ihre Erziehungskompetenz stärken, gelingende und erfüllende Beziehungen mit ihren Kindern aufbauen, und ein kooperatives, stressfreieres Zusammenleben in der Familie erreichen können.
                                </p>
                                <p>
                                    In dem gut ausgearbeiteten Programm werden u.a. die eigenen Wertevorstellungen, Ressourcen und Stärken (wieder oder neu) entdeckt und Schritt für Schritt hilfreiche "Tools" angeboten, die ausprobiert und "personalisiert" werden können.
                                </p>
                                <p>
                                    Genau deshalb ist das Konzept - und das ist weniger bekannt - weit über ein "Familientraninig" hinaus hilfreich für jede Art zwischenmenschlicher Beziehungen, so auch in der Partnerschaft und am Arbeitsplatz.
                                </p>
                                <p>
                                    Spielerisch und humorvoll, mit Aha-Erlebnissen und Spaß in der Gruppe zeigt der Impulsvortrag auf, wie schon kleine Übungen oder "Tools" des STEP-Konzepts viel bewegen können.
                                </p>
                            </div>
                        </Accordeon>
                    </div>
                </div>
                <img src={StepEncouragementScientist} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        {/* --- STEP-Elternkurs für Eltern von Kindern unter 6 Jahren (Teil 1) --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">
                            STEP-Elternkurs für Eltern von Kindern unter 6 Jahren – Teil 1
                        </h1>
                        <h2>VHS-Kursnummer: 241105120</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-für-Eltern-von-Kindern-unter-6-Jahren-Teil-1/241105120" />
                    <div>
                        <p>5 Termine: Dienstags, 20:00 - 22:00</p>
                        <p>Kursstart: 25.03.2025</p>
                        <p>Kursende: 06.05.2025</p>
                        <VhsLocation room="TBD" />
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    In die Zukunft investieren mit einem respektvollen, liebevollen,
                                    teilnehmenden und entspannten Familienleben von Anfang an –
                                    das STEP-Konzept bietet viele wertvolle Anregungen und Tools.
                                </p>
                                <p>
                                    In diesem ersten Teil des STEP-Kurses setzen wir uns mit den
                                    wichtigsten Erziehungsthemen auseinander und durchleben sie
                                    in einer wertschätzenden und respektvollen Gruppenatmosphäre
                                    mit Hilfe von Rollenspielen, Kleingruppenarbeiten und "lebendigem
                                    Lehrmaterial" aus einer neuen Perspektive. Humor ist dabei sehr willkommen!
                                </p>
                                <p>
                                    Der Erfahrungsaustausch innerhalb der Gruppe ist ein wichtiger Baustein;
                                    dabei wird berücksichtigt, dass jede Familie ihre individuellen
                                    Wertvorstellungen hat. Es ist dabei nicht entscheidend, ob der Kurs
                                    vorausschauend oder hilfesuchend angesteuert wird.
                                </p>
                                <p>
                                    Es macht Freude, Schritt für Schritt die Familienatmosphäre aufzuwerten
                                    und in die Zukunft zu investieren.
                                </p>
                                <p>
                                    Das STEP-Elternbuch und das Arbeitsheft sind im Kurspreis enthalten;
                                    der Kurs wird finanziell durch das Landesprogramm STÄRKE unterstützt
                                    (<a href="https://www.ortenaukreis.de/output/download.php?fid=3406.3794.1.PDF" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="underline hover:text-step-600">
                                        siehe Ortenauer-STÄRKE-Flyer
                                    </a>).
                                </p>
                            </div>
                        </Accordeon>
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Dienstag", date: "25.03.2025" },
                                { day: "Dienstag", date: "01.04.2025" },
                                { day: "Dienstag", date: "08.04.2025" },
                                { day: "Dienstag", date: "29.04.2025" },
                                { day: "Dienstag", date: "06.05.2025" },
                            ]}
                        />
                    </div>
                </div>
                <img src={StepEncouragementGel} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        {/* --- STEP-Elternkurs für Eltern von Kindern zwischen 6–12 Jahren (Teil 1) --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">
                            STEP-Elternkurs für Eltern von Kindern zwischen 6–12 Jahren – Teil 1
                        </h1>
                        <h2>VHS-Kursnummer: 241105121</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-für-Eltern-von-Kindern-zwischen-6-und-12-Jahren-Teil-1/241105121" />
                    <div>
                        <p>5 Termine: Mittwochs, 20:00 - 22:00</p>
                        <p>Kursstart: 26.03.2025</p>
                        <p>Kursende: 07.05.2025</p>
                        <VhsLocation room="TBD" />
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    In die Zukunft investieren mit einem respektvollen, liebevollen,
                                    teilnehmenden und entspannten Familienleben von Anfang an –
                                    das STEP-Konzept bietet viele wertvolle Anregungen und Tools.
                                </p>
                                <p>
                                    In diesem ersten Teil des STEP-Kurses setzen wir uns mit den
                                    wichtigsten Erziehungsthemen auseinander und durchleben sie
                                    in einer wertschätzenden und respektvollen Gruppenatmosphäre
                                    mit Hilfe von Rollenspielen, Kleingruppenarbeiten und
                                    "lebendigem Lehrmaterial" aus einer neuen Perspektive.
                                    Humor ist dabei sehr willkommen!
                                </p>
                                <p>
                                    Der Erfahrungsaustausch innerhalb der Gruppe ist ein wichtiger Baustein;
                                    dabei wird berücksichtigt, dass jede Familie ihre individuellen
                                    Wertvorstellungen hat. Es ist dabei nicht entscheidend, ob der Kurs
                                    vorausschauend oder hilfesuchend angesteuert wird.
                                </p>
                                <p>
                                    Es macht Freude, Schritt für Schritt die Familienatmosphäre aufzuwerten
                                    und in die Zukunft zu investieren.
                                </p>
                                <p>
                                    Das STEP-Elternbuch und das Arbeitsheft sind im Kurspreis enthalten;
                                    der Kurs wird finanziell durch das Landesprogramm STÄRKE unterstützt
                                    (<a href="https://www.ortenaukreis.de/output/download.php?fid=3406.3794.1.PDF" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="underline hover:text-step-600">
                                        siehe Ortenauer-STÄRKE-Flyer
                                    </a>).
                                </p>
                            </div>
                        </Accordeon>
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Mittwoch", date: "26.03.2025" },
                                { day: "Mittwoch", date: "02.04.2025" },
                                { day: "Mittwoch", date: "09.04.2025" },
                                { day: "Mittwoch", date: "30.04.2025" },
                                { day: "Mittwoch", date: "07.05.2025" },
                            ]}
                        />
                    </div>
                </div>
                <img src={StepEncouragementGel} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>


        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
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
                            className="bg-primary p-2"
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
            </CardContent>
        </Card>
    </BlendingInDiv>
}

