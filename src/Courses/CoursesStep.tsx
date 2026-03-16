import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import StepParentCourse2 from "../assets/images/step-elterkurs-2.png";
import StepEncouragementScientist from "../assets/images/cartoon-encouragement-scientist.png";
import StepUnder6 from "../assets/images/step-under-6.jpg";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';
import { Helmet } from 'react-helmet';
import SignupButton from './SignupButton';
import VhsLocation from './VhsLocation';
import CourseNotAvailable from '../components/CourseNotAvailable';
import { Card, CardContent } from '@/components/ui/card';

 

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>STEP Kurse - Termine und Informationen</title>
            <meta name="description" content="Finden Sie alle aktuellen Termine und detaillierte Informationen zu den STEP-Elternkursen. Verbessern Sie Ihre Erziehungs- und Kommunikationsfähigkeiten für ein harmonisches Familienleben." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">STEP Kurse</h1>
        </div>

        {/* --- Infoabend Elternkurs STEP --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">
                            Impulsvortag für Eltern von Kindern von 2-12 Jahren:
                        </h1>
                        <h2>Gut genug ist wirklich gut!</h2>
                        <h2>VHS-Kursnummer: 261105120</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Infoabend-Elternkurs-STEP/261105120" />
                    <div>
                        <p>Beginn: Di., 05.05.2026, 20:00 - 21:00 Uhr</p>
                        <p>Dauer: 1 Termin</p>
                        <p>Kursort: Offenburg VHS 101 Seminarraum</p>
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Erziehende stellen oft hohe Ansprüche an sich selbst – und Erziehung ist auch nicht immer einfach. Letztlich geht es darum, nicht perfekt, sondern gut genug zu sein. Dabei hilft das STEP-Konzept, das an diesem Abend vorgestellt wird und das im Sommer als Elternkurs an der VHS Offenburg angeboten wird.
                                </p>
                                <p>
                                    Das Programm baut auf fundierten wissenschaftlichen Erkenntnissen auf, ist gut strukturiert und arbeitet mit vielen praktischen Übungen. Unser Familienleben ist und wird nie perfekt sein, aber es ist viel gewonnen, wenn wir das "gut genug" anstreben. Wie überall gilt: Übung macht den Meister!
                                </p>
                                <p>Blitzlichtartig beleuchten wir einen Ausschnitt der im Kurs enthaltenen Themen:</p>
                                <ul className="[&_li]:list-disc [&_li]:ml-5">
                                    <li>gut zuhören,</li>
                                    <li>respektvoll miteinander umgehen,</li>
                                    <li>freundlich und bestimmt Grenzen setzen,</li>
                                    <li>uns und unsere Kinder ermutigen können.</li>
                                </ul>
                                <p>
                                    Bringen Sie Offenheit und Humor für den Abend mit.
                                </p>
                            </div>
                        </Accordeon>
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                {
                                    date: "05.05.2026",
                                    time: "20:00 - 21:00 Uhr",
                                    location: "Amand-Goegg-Straße 2 - 4, Offenburg VHS 301 Seminarraum"
                                },
                            ]}
                        />
                    </div>
                </div>
                <img src={StepEncouragementGel} alt="Illustration zum Infoabend" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        {/* --- STEP-Elternkurs Teil 1 fuer Eltern von Kindern zwischen 2-12 Jahren --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">
                            „Gut genug ist wirklich gut“ – Elternkurs STEP (Teil 1)
                        </h1>
                        <h2>für Eltern von Kindern zwischen 2-12 Jahren</h2>
                        <h2>VHS-Kursnummer: 261105121</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Gut-genug-ist-wirklich-gut-Elternkurs-STEP-Teil-1/261105121" />
                    <div>
                        <p>Beginn: Do., 18.06.2026, 09:00 - 11:00 Uhr</p>
                        <p>Dauer: 5 Termine</p>
                        <p>Kursort: Offenburg VHS 101 Seminarraum</p>
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Erziehende stellen oft hohe Ansprüche an sich selbst – und Erziehung ist auch nicht immer einfach. Im Kern geht es darum, nicht perfekt, sondern gut genug zu sein. Der Kurs regt im Austausch mit anderen Eltern und mit Hilfe von STEP dazu an, die eigene Wertevorstellung und das individuelle Familienkonzept zu durchdenken und eventuelle Problembereiche lösungsorientiert anzugehen. Eine gute Möglichkeit, den Alltag bewusst und gelassen zu gestalten und wichtige Bausteine für die Zukunft zu legen.
                                </p>
                                <p>
                                    Das STEP-Konzept überzeugt, weil es gut strukturiert ist, mit vielen praktischen Übungen arbeitet, auf wissenschaftlichen Erkenntnissen aufbaut und einen Weg aufzeigt, wie wir z.B.
                                </p>
                                <ul className="[&_li]:list-disc [&_li]:ml-5">
                                    <li>uns und unsere Kinder ermutigen,</li>
                                    <li>gut zuhören und respektvoll miteinander umgehen,</li>
                                    <li>im Miteinander Probleme lösen,</li>
                                    <li>freundlich und bestimmt Grenzen setzen können.</li>
                                </ul>
                                <p>
                                    In der Gruppe lernen wir uns selbst besser kennen, erleben ähnliche und andere Familienstrukturen und bekommen hilfreiche Tools an die Hand. Mut, nicht perfekt zu sein, Offenheit und Humor sind willkommen!
                                </p>
                                <p>
                                    Der STEP-Kurs (Systematisches Training für Eltern und Pädagogen) wird durch das STÄRKE-Programm finanziell gefördert.
                                </p>
                                <p>
                                    Für den Kurs wird ein Übungsbuch und das STEP-Elternbuch benötigt - je nach Alter der Kinder „Die ersten 6 Jahre“ oder „6-12 Jahre". Gerne auch schon vorab besorgen.
                                </p>
                            </div>
                        </Accordeon>
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { date: "18.06.2026", time: "09:00 - 11:00 Uhr", location: "Offenburg VHS 101 Seminarraum" },
                                { date: "25.06.2026", time: "09:00 - 11:00 Uhr", location: "Offenburg VHS 101 Seminarraum" },
                                { date: "02.07.2026", time: "09:00 - 11:00 Uhr", location: "Offenburg VHS 101 Seminarraum" },
                                { date: "09.07.2026", time: "09:00 - 11:00 Uhr", location: "Offenburg VHS 101 Seminarraum" },
                                { date: "16.07.2026", time: "09:00 - 11:00 Uhr", location: "Offenburg VHS 101 Seminarraum" },
                            ]}
                        />
                    </div>
                </div>
                <img src={StepEncouragementScientist} alt="Illustration zum STEP-Elternkurs" className="hidden md:block w-72 object-contain rounded-md bg-white" />
            </CardContent>
        </Card>

        {/* --- Online: STEP-Elternkurs für Eltern von Kindern zwischen 2–12 Jahren --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">
                            Online: STEP-Elternkurs zur Ermutigung und Ermächtigung in der Erziehung
                        </h1>
                        <h2>für Eltern von Kindern zwischen 2–12 Jahren</h2>
                        <h2>VHS-Kursnummer: 252105121</h2>
                    </div>
                    {/* <SignupButton link="https://www.vhs-offenburg.de/programm/semesterschwerpunkt-maechtig/kurs/Online-STEP-Elternkurs-zur-Ermutigung-und-Ermaechtigung-in-der-Erziehung/252105121" /> */}
                    <div>
                        <p>8 Termine: Mittwochs, 17:00 - 19:00</p>
                        <p>Kursstart: 15.10.2025</p>
                        <p>Kursende: 10.12.2025</p>
                        <p><span className="font-bold">Online</span> via Zoom</p>
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    In diesem Kurs setzen wir uns mit den wichtigsten Erziehungsthemen auseinander und durchleben sie in einer wertschätzenden und respektvollen Gruppenatmosphäre. Der Erfahrungsaustausch innerhalb der Gruppe ist ein wichtiger Baustein; dabei wird berücksichtigt, dass jede Familie ihre individuellen Wertvorstellungen hat.
                                </p>
                                <p>
                                    Es ist nicht entscheidend, ob der Kurs vorausschauend oder hilfesuchend angesteuert wird. Es macht Freude, Schritt für Schritt die Familienatmosphäre aufzuwerten und in die Zukunft zu investieren.
                                </p>
                                <p>
                                    Der Erwerb (in eigener Verantwortung) des STEP-Elternbuches und des Arbeitsheftes sind notwendig, der Kurs wird finanziell durch das Landesprogramm STÄRKE unterstützt
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
                                { day: "Mittwoch", date: "15.10.2025" },
                                { day: "Mittwoch", date: "22.10.2025" },
                                { day: "Mittwoch", date: "05.11.2025" },
                                { day: "Mittwoch", date: "12.11.2025" },
                                { day: "Mittwoch", date: "19.11.2025" },
                                { day: "Mittwoch", date: "26.11.2025" },
                                { day: "Mittwoch", date: "03.12.2025" },
                                { day: "Mittwoch", date: "10.12.2025" },
                            ]}
                        />
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={StepEncouragementScientist} alt="Illustration zum Online-STEP-Kurs" className="hidden md:block w-72 object-contain rounded-md bg-white" />
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
                    {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-für-Eltern-von-Kindern-unter-6-Jahren-Teil-1/251105120" /> */}
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
                        {/* <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Dienstag", date: "25.03.2025" },
                                { day: "Dienstag", date: "01.04.2025" },
                                { day: "Dienstag", date: "08.04.2025" },
                                { day: "Dienstag", date: "29.04.2025" },
                                { day: "Dienstag", date: "06.05.2025" },
                            ]}
                        /> */}
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={StepUnder6} alt="Illustration zum STEP-Kurs fuer Eltern mit kleinen Kindern" className="hidden md:block w-72 object-contain rounded-md" />
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
                    {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-STEP-Elternkurs-für-Eltern-von-Kindern-zwischen-6-und-12-Jahren-Teil-1/251105121" /> */}
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
                        {/* <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Mittwoch", date: "26.03.2025" },
                                { day: "Mittwoch", date: "02.04.2025" },
                                { day: "Mittwoch", date: "09.04.2025" },
                                { day: "Mittwoch", date: "30.04.2025" },
                                { day: "Mittwoch", date: "07.05.2025" },
                            ]}
                        /> */}
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={StepEncouragementScientist} alt="Illustration zum STEP-Kurs fuer Eltern von Schulkindern" className="hidden md:block w-72 object-contain rounded-md" />
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
                <img src={StepParentCourse2} alt="Illustration zum STEP-Elternkurs Teil 2" className="hidden md:block w-72 object-contain rounded-md bg-white" />
            </CardContent>
        </Card>


        {/* --- Wie "Zwischen-Menschlichkeit heute" mit dem STEP-Konzept gut gelebt werden kann… in Familie und Beruf. --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Wie "Zwischen-Menschlichkeit heute" mit dem STEP-Konzept gut gelebt werden kann… in Familie und Beruf.</h1>
                        <h2>VHS-Kursnummer: 242105123</h2>
                    </div>
                    {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Eltern-VHS-Wie-Zwischenmenschlichkeit-heute-mit-dem-STEP-Konzept-gut-gelebt/242105123" /> */}
                    {/*
                    <div>
                        <p> Termin: Dienstag, 21.01.2025, 19:30-21:00 </p>
                        <VhsLocation room="102" />
                    </div>
                    */}
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
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={StepEncouragementGel} alt="Illustration zum STEP-Impulsvortrag" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>
    </BlendingInDiv>
}

