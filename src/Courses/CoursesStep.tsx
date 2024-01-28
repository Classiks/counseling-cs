import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import StepEncouragementScientist from "../assets/images/cartoon-encouragement-scientist.png";
import StepParentCourse2 from "../assets/images/step-elterkurs-2.png";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';

export default function Courses() {
    // TOdO: Image stretches when accordeon
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">STEP-Elternkurs Teil 1</h1>
                    <h2>VHS-Kursnummer: 241105120</h2>
                </div>
                <div>
                    <p> Termine: Dienstag, 15:00 - 17:00, wöchentlich </p>
                    <p> Ort: {<VhsLink />}  302 Seminarraum </p>
                    <p> Kursstart: 09.04.2024 </p>
                    <p> Kursende: 14.05.2024 </p>
                </div>
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-step-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <p className="flex-1">
                            <ul className="[&_li]:list-disc [&_li]:ml-5">
                                <li>Wir lernen, uns und unsere Kinder besser zu verstehen.</li>
                                <li>Unsere persönlichen Wertvorstellungen, Überzeugungen und Gefühle.</li>
                                <li>Wir ermutigen unsere Kinder und uns selbst.</li>
                                <li>Wir hören unseren Kindern zu und reden mit ihnen.</li>
                            </ul>
                        </p>
                    </Accordeon>
                    <DateAccordeon
                        className="bg-step-200 p-2 w-full"
                        dates={[
                            { day: "Dienstag", date: "09.04.2024" },
                            { day: "Dienstag", date: "16.04.2024" },
                            { day: "Dienstag", date: "30.04.2024" },
                            { day: "Dienstag", date: "07.05.2024" },
                            { day: "Dienstag", date: "14.05.2024" },
                        ]}
                    />
                </div>
            </div>
            <img src={StepEncouragementGel} alt="course image" className="hidden md:block w-72 object-contain rounded-md" />
        </div>

        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10 items-start justify-between">
            <div className="space-y-5">
                <div className="p-2 pb-0">
                    <h1 className="text-2xl font-bold italic">STEP-Elternkurs Teil 2</h1>
                    <h2>VHS-Kursnummer: 241105121</h2>
                </div>
                <div>
                    <p> Termine: Dienstag, 15:00 - 17:00, wöchentlich </p>
                    <p> Ort: {<VhsLink />}  302 Seminarraum </p>
                    <p> Kursstart: 25.06.2024 </p>
                    <p> Kursende: 23.07.2024 </p>
                </div>
                <div>
                    <Accordeon
                        heading="Inhalte"
                        className="bg-step-200 p-2"
                        headingClassName="font-bold text-lg"
                    >
                        <ul className="[&_li]:list-disc [&_li]:ml-5">
                            <li>Wir helfen unseren Kindern, zu kooperieren.</li>
                            <li>Sinnvolle Disziplin</li>
                            <li>Was machen wir, wenn…?</li>
                        </ul>
                    </Accordeon>
                    <DateAccordeon
                        className="bg-step-200 p-2 max-w-96"
                        dates={[
                            { day: "Dienstag", date: "25.06.2024" },
                            { day: "Dienstag", date: "02.07.2024" },
                            { day: "Dienstag", date: "09.07.2024" },
                            { day: "Dienstag", date: "16.07.2024" },
                            { day: "Dienstag", date: "23.07.2024" },
                        ]}
                    />
                </div>
            </div>
            <img src={StepParentCourse2} alt="course image" className="hidden md:block w-72 object-contain rounded-md bg-white" />
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