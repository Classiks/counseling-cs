import StepLogo from "../assets/images/step_logo_cut.png";
import Slideshow from "../Slideshow/Slideshow";
import BlendingInDiv from "../components/BlendingInDiv";

import GirlsInHammock from "../assets/images/girls-hammock.jpg";
import ParentChildConcrete from "../assets/images/parent-child-concrete.jpg";
import ChildOnArm from "../assets/images/adult-child-on-arm-black-white.jpg";
import NewbornFist from "../assets/images/adult-child-fist.jpg";

const elternmeinungen: string[]= [
    "Je mehr ein Kind beginnt Grenzen auszutesten, desto klarer muss man sie abstecken. Aber mit Respekt und Freundlichkeit – das ist die Basis des STEP Programms.“\n- Natalie Bettermann, Interview in „Eltern“",
    "„Heute kann ich sagen: Erziehung macht Spaß! Durch den STEP Kurs kann ich kreativer an eine Situation herangehen. Ich beziehe bei Konflikten nicht sofort alles auf mich, sondern habe gelernt, die Sache auch aus dem Blickwinkel des Kindes anzuschauen.“\n- Monika Norz, Spielgruppenleiterin, zwei Kinder, Kloten, Schweiz",
    "„Meine Erwartungen wurden übertroffen, da es eine nette, offene Elternrunde war mit einer tollen Atmosphäre und viel Zeit zum Austausch über aktuelle Alltagsthemen.“\n- Teilnehmerin, STEP Kurs, Kita Rübenkamp, Hamburg",
    "„STEP ermöglicht mir eine zeitgemäße Kindererziehung, bei der jedes Kind mit seinen Stärken und Schwächen respektiert und gefördert wird.“\n- Dr. Astrid Hilgenstock, zwei Kinder, Dinslaken, NRW",
    "„Der Kurs hat mein Familienleben bereichert, den Alltag erleichtert und die Bindung zu meinen Kindern nachhaltig gestärkt.“\n- Kursteilnehmerin, Wedel, Schleswig-Holstein"
]

export default function Homepage() {
    return <BlendingInDiv>
        <div className="flex justify-end">
            <StepLogoHomepage />
        </div>

        <div className="flex lg:flex-row flex-col justify-between py-5 px-5">
            {/* <div>Hello</div>
            <div>World</div> */}
            <ContentBubble>
                {elternmeinungen[0].split("\n").map((line, i) => <p key={i}>{line}</p>)}
            </ContentBubble>
            <ContentBubble>
                World
            </ContentBubble>
        </div>


        <div className="w-full flex justify-center">
                <Slideshow 
                    className="w-1/2 aspect-square rounded-full"
                    contents={[
                        { image: GirlsInHammock, },
                        { image: ParentChildConcrete },
                        { image: ChildOnArm },
                        { image: NewbornFist },
                    ]} 
                    interval={15000}
                />
        </div>
    </BlendingInDiv>
}

function StepLogoHomepage() {
    return <img
        src={StepLogo}
        className="w-40 m-5 bg-step-complementary-300 rounded-[50%] mx-5 my-2"
        alt=""
    />
}

interface IContentBubbleProps {
    className?: string
    children: React.ReactNode
}

function ContentBubble({ className, children }: IContentBubbleProps) {
    className = "bg-step bg-opacity-70 rounded-[50%] p-10 lg:w-[45%] w-4/5 h-60 my-5 " + className;
    return <div className={className}>
        <div className="text-center">
            {children}
        </div>
    </div>

}