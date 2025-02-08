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

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>TCM Kurse - Traditionelle Chinesische Medizin</title>
            <meta name="description" content="Informieren Sie sich über die angebotenen Kurse in Traditioneller Chinesischer Medizin (TCM) für Gesundheitspflege, Selbstfürsorge und präventive Methoden." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">Kurse</h1>
        </div>

        <Card className="m-3">
            <CardContent className="p-4 flex gap-x-10 items-start justify-between">
                <div className="space-y-5">
                    <div className="p-2 pb-0">
                        <h1 className="text-2xl font-bold italic">Gesund durch den Winter mit den 5 Säulen der Chinesischen Medizin</h1>
                        <h2>VHS-Kursnummer: 242303074</h2>
                    </div>
                    <SignupButton link="https://www.vhs-offenburg.de/programm/allgemeinbildung/kurs/Gesund-durch-den-Winter/242303074" />
                    <div>
                        <p> 6 Termine: Mittwochs, 18:00 - 19:30</p>
                        <p> Kursstart: 15.01.2025 </p>
                        <p> Kursende: 26.02.2025 </p>
                        <VhsLocation room="302" />
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
                        <DateAccordeon
                            className="bg-primary p-2 w-full"
                            dates={[
                                { day: "Mittwoch", date: "15.01.2025" },
                                { day: "Mittwoch", date: "22.01.2025" },
                                { day: "Mittwoch", date: "29.01.2025" },
                                { day: "Mittwoch", date: "12.02.2025" },
                                { day: "Mittwoch", date: "19.02.2025" },
                                { day: "Mittwoch", date: "26.02.2025" },
                            ]}
                        />
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
                        <p>6 Termine: Mittwochs, 18:00 - 19:30</p>
                        <p>Kursstart: 02.04.2025</p>
                        <p>Kursende: 21.05.2025</p>
                        <VhsLocation room="302" />
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
                        <DateAccordeon
                            className="bg-primary p-2"
                            dates={[
                                { day: "Mittwoch", date: "02.04.2025" },
                                { day: "Mittwoch", date: "09.04.2025" },
                                { day: "Mittwoch", date: "30.04.2025" },
                                { day: "Mittwoch", date: "07.05.2025" },
                                { day: "Mittwoch", date: "14.05.2025" },
                                { day: "Mittwoch", date: "21.05.2025" },
                            ]}
                        />
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

