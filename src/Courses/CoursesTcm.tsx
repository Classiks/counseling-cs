import BlendingInDiv from '../components/BlendingInDiv';
import FitForSummer from "../assets/images/fit-for-summer-ai.png";
import DailyLife from "../assets/images/tcm-daily-family-life.png";
import ForYouAndMe from "../assets/images/tcm-for-you-and-me.png";
import DateAccordeon from './DateAccordeon';
import Accordeon from '../components/Accordeon';

export default function Courses() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
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
                        className="bg-tcm-200 p-2 max-w-96"
                    >
                        <p className="flex-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ratione, enim corporis exercitationem ipsa aperiam velit. Itaque porro sint fugiat nam. Dignissimos mollitia nam saepe animi molestias, cupiditate itaque facere illo distinctio explicabo tenetur voluptate error labore porro eum nostrum perspiciatis aspernatur qui, dolores omnis facilis. Explicabo voluptatem possimus assumenda nemo dolore, est eveniet animi ut, dignissimos quos harum.
                        </p>
                    </Accordeon>
                    <DateAccordeon
                        className="bg-tcm-200 p-2 max-w-96"
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
                        className="bg-tcm-200 p-2 max-w-96"
                    >
                        <p className="flex-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ratione, enim corporis exercitationem ipsa aperiam velit. Itaque porro sint fugiat nam. Dignissimos mollitia nam saepe animi molestias, cupiditate itaque facere illo distinctio explicabo tenetur voluptate error labore porro eum nostrum perspiciatis aspernatur qui, dolores omnis facilis. Explicabo voluptatem possimus assumenda nemo dolore, est eveniet animi ut, dignissimos quos harum.
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
                        className="bg-tcm-200 p-2 max-w-96"
                    >
                        <p className="flex-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ratione, enim corporis exercitationem ipsa aperiam velit. Itaque porro sint fugiat nam. Dignissimos mollitia nam saepe animi molestias, cupiditate itaque facere illo distinctio explicabo tenetur voluptate error labore porro eum nostrum perspiciatis aspernatur qui, dolores omnis facilis. Explicabo voluptatem possimus assumenda nemo dolore, est eveniet animi ut, dignissimos quos harum.
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