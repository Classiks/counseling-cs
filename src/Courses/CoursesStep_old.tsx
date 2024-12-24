import Accordeon from '../components/Accordeon';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import CourseNotAvailable from '../components/CourseNotAvailable';

export default function CoursesStep_old() {
    return <>
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
    </>
}