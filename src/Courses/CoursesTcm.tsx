import BlendingInDiv from '../components/BlendingInDiv';
import FitForSummer from "../assets/images/fit-for-summer-ai.png";
import DailyLife from "../assets/images/tcm-daily-family-life.png";
import ForYouAndMe from "../assets/images/tcm-for-you-and-me.png";
import HealthyWinter from "../assets/images/tcm-healthy-winter.webp";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';
import { Helmet } from 'react-helmet';
import SignupButton from './SignupButton';
import VhsLocation from './VhsLocation';
import CourseNotAvailable from '../components/CourseNotAvailable';
import { Card, CardContent } from '@/components/ui/card';
import MenopauseImg from "../assets/images/menopause.png";
import CookingImg from "../assets/images/maechtig-kochen.png"
import PreventionImg from "../assets/images/gesndheitspraevention.png"

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>TCM Kurse - Traditionelle Chinesische Medizin</title>
            <meta name="description" content="Informieren Sie sich über die angebotenen Kurse in Traditioneller Chinesischer Medizin (TCM) für Gesundheitspflege, Selbstfürsorge und präventive Methoden." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">Kurse</h1>
        </div>

        {/* --- Menopause - Jahre des Wechsels und der Selbstermächtigung --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Menopause - Jahre des Wechsels und der Selbstermächtigung</h1>
                        <h2>VHS-Kursnummer: 252303008</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/semesterschwerpunkt-maechtig/kurs/Menopause-Jahre-des-Wechsels-und-der-Selbstermaechtigung/252303008" />
                    <div>
                        <p>1 Termin: Samstag, 22.11.2025, 09:00 - 12:00</p>
                        <VhsLocation room="113 Bewegung" />
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Was ist die Menopause? Was geschieht in den Wechseljahren? Wie können wir diese wichtige Phase gut leben und aktiv gestalten? Selbstermächtigung und Hilfe zur Selbsthilfe sind Themen dieses Workshops, in dem
                                </p>
                                <ul className="[&_li]:list-disc [&_li]:ml-5">
                                    <li>Grundlagen erklärt,</li>
                                    <li>Standpunkte geteilt,</li>
                                    <li>Körperwahrnehmung vertieft,</li>
                                    <li>Fragen ausgesprochen und</li>
                                    <li>naturheilkundliche und praktische Lösungswege aufgezeigt werden.</li>
                                </ul>
                            </div>
                        </Accordeon>
                    </div>
                </div>
                <img src={MenopauseImg} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        {/* --- Mächtig kochen --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Mächtig kochen: Gerichte mit hohem Getreide-, Gemüse- und gesundem Fettanteil</h1>
                        <h2>VHS-Kursnummer: 252305514</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/semesterschwerpunkt-maechtig/kurs/Maechtig-kochen-Gerichte-mit-hohem-Getreide--Gemuese--und-gesundem-Fettanteil/252305514" />
                    <div>
                        <p>1 Termin: Donnerstag, 06.11.2025, 18:00 - 20:00</p>
                        <VhsLocation room="201 Kochstudio" />
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Wenn wertvolle Zutaten in gut abgestimmten Mengen verwendet werden, darf ein Essen gerne „mächtig“ sein. In diesem Kurs werden wichtige Ernährungsgrundlagen einer vollwertigen Küche mit Bereicherungen aus der chinesischen Diätetik vermittelt und praktisch umgesetzt. Eine Morgen-, Mittags- und Abendmahlzeit werden als Menü zubereitet und verzehrt. Hinweis: Es wird kein glutenhaltiges Getreide verwendet.
                                </p>
                                <p className="font-bold">Wichtig für Kochkurse</p>
                                <p>
                                    Bitte bringen Sie Schürze, Behältnisse für Kostproben und ein Getränk mit. Die Lebensmittel werden von der Kursleitung eingekauft und anteilig im Kurs abgerechnet. Bitte teilen Sie bei der Anmeldung Unverträglichkeiten oder vegetarische/vegane Ernährung mit.
                                </p>
                            </div>
                        </Accordeon>
                    </div>
                </div>
                <img src={CookingImg} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        {/* --- Gesundheitsprävention mit Chinesischer Medizin und Naturheilkunde --- */}
        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Gesundheitsprävention mit Chinesischer Medizin und Naturheilkunde</h1>
                        <h2>VHS-Kursnummer: 252303006</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/semesterschwerpunkt-maechtig/kurs/Gesundheitspraevention-mit-Chinesischer-Medizin-und-Naturheilkunde/252303006" />
                    <div>
                        <p>Beginn: Dienstag, 14.10.2025, 18:00 - 19:30</p>
                        <p>Dauer: 6 Termine</p>
                        <VhsLocation room="101 Seminarraum" />
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="flex flex-col space-y-2">
                                <p>
                                    Das Heilkonzept der Chinesischen Medizin basiert auf den 5 Säulen Akupunktur/Akupressur, Ernährungslehre, Pflanzenheilkunde, Qigong und Tuina-Massage. An ausgewählten Beispielen werden diese Methoden theoretisch und praktisch erarbeitet, um gestärkt und gesund durch die Wintermonate zu kommen.
                                </p>
                                <p>
                                    Langfristiges Ziel ist es, einfache und zugleich wirkungsvolle Praktiken zu erlernen und regelmäßig im Alltag umzusetzen, um für das „Gute Leben“ zu sorgen.
                                </p>
                                <p className="text-sm opacity-80">
                                    Hinweis: Die Traditionelle Chinesische Medizin ist eine Methode ohne wissenschaftlichen Nachweis und als Ergänzung der Schulmedizin zu verstehen.
                                </p>
                            </div>
                        </Accordeon>
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Dienstag", date: "14.10.2025" },
                                { day: "Dienstag", date: "21.10.2025" },
                                { day: "Dienstag", date: "04.11.2025" },
                                { day: "Dienstag", date: "11.11.2025" },
                                { day: "Dienstag", date: "18.11.2025" },
                                { day: "Dienstag", date: "25.11.2025" },
                            ]}
                        />
                    </div>
                </div>
                <img src={PreventionImg} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Gesund durch den Winter mit den 5 Säulen der Chinesischen Medizin</h1>
                        <h2>VHS-Kursnummer: 242303074</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Gesund-durch-den-Winter/242303074" />
                    <div>
                        {/* <p> 6 Termine: Mittwochs, 18:00 - 19:30</p>
                        <p> Kursstart: 15.01.2025 </p>
                        <p> Kursende: 26.02.2025 </p>
                        <VhsLocation room="302" /> */}
                    </div> 
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div>
                                <p>
                                    Das Heilkonzept der Chinesischen Medizin basiert auf den 5 Säulen Akupunktur/Akupressur, Ernährungslehre, Pflanzenheilkunde, Qigong und Tuina-Massage. Im Kurs werden wir diese Methoden an ausgewählten Beispielen theoretisch und praktisch bearbeiten, um gestärkt und gesund durch die Wintermonate zu kommen. Langfristiges Ziel ist es, einfache und zugleich wirkungsvolle Praktiken zu erlernen, sie im Alltag regelmäßig umzusetzen und damit für das „Gute Leben" zu sorgen.
                                </p>
                                <p className="mt-3">
                                    Bitte in bequemer Kleidung kommen.
                                </p>
                            </div>
                        </Accordeon>
                        {/* <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Mittwoch", date: "15.01.2025" },
                                { day: "Mittwoch", date: "22.01.2025" },
                                { day: "Mittwoch", date: "29.01.2025" },
                                { day: "Mittwoch", date: "12.02.2025" },
                                { day: "Mittwoch", date: "19.02.2025" },
                                { day: "Mittwoch", date: "26.02.2025" },
                            ]}
                        /> */}
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={HealthyWinter} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Fit für den Sommer mit den 5 Säulen der Chinesischen Medizin</h1>
                        <h2>VHS-Kursnummer: 242303075</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Fit-fuer-den-Sommer/251303017" />
                    <div>
                        {/* <p>6 Termine: Mittwochs, 18:00 - 19:30</p>
                        <p>Kursstart: 02.04.2025</p>
                        <p>Kursende: 21.05.2025</p>
                        <VhsLocation room="302" /> */}
                    </div>
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <div className="space-y-2">
                                <p>
                                    In diesem Kurs erfahren Sie mehr über die Chinesische Medizin und wie die hilfreichen Ansätze des
                                    Yang Shen ("Leben pflegen") in den Alltag eingefügt werden können.
                                </p>
                                <p>
                                    Es geht darum, den Winter gut abzuschließen und die Energien des Frühjahrs zu nutzen, um den
                                    Sommer gestärkt erleben zu können. Unter anderem folgende Fragen werden theoretisch und
                                    praktisch behandelt:
                                </p>
                                <ul className="[&_li]:list-disc [&_li]:ml-5">
                                    <li>Welche Dehnungs- und Lockerungsübungen holen meinen Körper aus dem Winterschlaf?</li>
                                    <li>Kann ich von der Chinesischen Diätetik und der 5-Elemente-Küche unter Berücksichtigung
                                        meiner Essgewohnheiten "Nährendes" übernehmen?</li>
                                    <li>Was ist Chinesische Arzneimitteltherapie und hat sie mit der westlichen Phytotherapie etwas
                                        gemeinsam… was kann ich praktisch davon umsetzen?</li>
                                    <li>Wie setze ich die Druck- und Punktmassage gezielt ein, um Blockaden zu lösen und um mich
                                        freier zu bewegen?</li>
                                </ul>
                                <p>
                                    Der 6-wöchige Kurs orientiert sich auch an den Interessen der Kursteilnehmer, Neues ist immer
                                    willkommen.
                                </p>
                                <p className="font-bold">
                                    Bitte in bequemer Kleidung kommen.
                                </p>
                            </div>
                        </Accordeon>
                        {/* <DateAccordeon
                            className="bg-primary p-2"
                            dates={[
                                { day: "Mittwoch", date: "02.04.2025" },
                                { day: "Mittwoch", date: "09.04.2025" },
                                { day: "Mittwoch", date: "30.04.2025" },
                                { day: "Mittwoch", date: "07.05.2025" },
                                { day: "Mittwoch", date: "14.05.2025" },
                                { day: "Mittwoch", date: "21.05.2025" },
                            ]}
                        /> */}
                        <CourseNotAvailable />
                    </div>
                </div>
                <img src={FitForSummer} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Online: TCM für dich und mich</h1>
                        {/* <h2>VHS-Kursnummer: 241303019</h2> */}
                    </div>
                        {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Online-TCM-fuer-dich-und-mich/241303019" />
                    <div>
                        <p> Termin: Donnerstag, 16.05.2024, 17:00-18:30 </p>
                        <p> <span className="font-bold">Online</span>, Webinar Zoom 07</p>
                    </div>
                    <div> */}
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <p className="flex-1">
                                Nach einer kurzen Einführung in die Grundlagen der Chinesischen Medizin werden einfache, aber wirkungsvolle Übungen, Methoden und Rezepte vermittelt, die helfen, das "Gute lange Leben" zu pflegen und in die eigene Mitte zu finden
                            </p>
                        </Accordeon>
                    <CourseNotAvailable />
                </div>
                <img src={ForYouAndMe} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Chinesische und naturheilkundliche Medizin einfach im Familienalltag</h1>
                        {/* <h2>VHS-Kursnummer: 241303018</h2> */}
                    </div>
                    {/* <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Chinesische-und-naturheilkundliche-Medizin-einfach-im-Familienalltag-umgesetzt/241303018" />
                    <div>
                        <p> Termin: Donnerstag, 11.04.2024, 9:00-11:00 </p>
                        <VhsLocation room="101" />
                    </div> */}
                    <div>
                        <Accordeon
                            heading="Inhalte"
                            className="bg-primary p-2"
                            headingClassName="font-bold text-lg"
                        >
                            <p className="flex-1">
                                Nach einer kurzen Einführung in die 5 Säulen der Chinesischen Medizin werden ganzheitliche Methoden und Rezepte vermittelt, um gesund zu bleiben und gesund zu werden. Mit Hilfe von ausgewählten Qigong-Übungen, Ernährung nach den 5 Elementen, gezieltem Heilpflanzeneinsatz, Akupressur und Tuina (chinesischer Massage) kommen Groß und Klein gut durch die Erkältungszeit! 
                            </p>
                        </Accordeon>
                    </div>
                    
                    <CourseNotAvailable />
                </div>
                <img src={DailyLife} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
            </CardContent>
        </Card>

    </BlendingInDiv>
}

