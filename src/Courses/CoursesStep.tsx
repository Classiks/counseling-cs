import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementGel from "../assets/images/cartoon-encouragement-hairgel.png";
import StepEncouragementScientist from "../assets/images/cartoon-encouragement-scientist.png";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10">
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
                        className="bg-step-200 p-2 max-w-96"
                    >
                        <p className="flex-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ratione, enim corporis exercitationem ipsa aperiam velit. Itaque porro sint fugiat nam. Dignissimos mollitia nam saepe animi molestias, cupiditate itaque facere illo distinctio explicabo tenetur voluptate error labore porro eum nostrum perspiciatis aspernatur qui, dolores omnis facilis. Explicabo voluptatem possimus assumenda nemo dolore, est eveniet animi ut, dignissimos quos harum.
                        </p>
                    </Accordeon>
                    <DateAccordeon
                        className="bg-step-200 p-2 max-w-96"
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
            <img src={StepEncouragementGel} alt="course image" className="hidden md:block w-72 rounded-md" />
        </div>

        <div className="m-3 p-4 rounded-2xl  bg-step-400 flex gap-x-10">
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
                        className="bg-step-200 p-2 max-w-96"
                    >
                        <p className="flex-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ratione, enim corporis exercitationem ipsa aperiam velit. Itaque porro sint fugiat nam. Dignissimos mollitia nam saepe animi molestias, cupiditate itaque facere illo distinctio explicabo tenetur voluptate error labore porro eum nostrum perspiciatis aspernatur qui, dolores omnis facilis. Explicabo voluptatem possimus assumenda nemo dolore, est eveniet animi ut, dignissimos quos harum.
                        </p>
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
            <img src={StepEncouragementScientist} alt="course image" className="hidden md:block w-72 rounded-md" />
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