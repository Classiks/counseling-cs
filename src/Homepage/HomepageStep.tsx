import { ReactNode } from "react";

import StepLogo from "../assets/images/step_logo_cut.png";
import Slideshow from "../Slideshow/Slideshow";
import BlendingInDiv from "../components/BlendingInDiv";
import { ContentBubble, ContentBubbleSlideshow } from "./ContentBubble";
import Accordeon, { IAccordeon } from "../components/Accordeon";
import HeadingAndContent, { IHeadingAndContent } from "../components/HeadingAndContent";

import GirlsInHammock from "../assets/images/girls-hammock.jpg";
import ParentChildConcrete from "../assets/images/parent-child-concrete.jpg";
import ChildOnArm from "../assets/images/adult-child-on-arm-black-white.jpg";
import NewbornFist from "../assets/images/adult-child-fist.jpg";

const elternmeinungen: string[] = [
    "Je mehr ein Kind beginnt Grenzen auszutesten, desto klarer muss man sie abstecken. Aber mit Respekt und Freundlichkeit – das ist die Basis des STEP Programms.“\n- Natalie Bettermann, Interview in „Eltern“",
    "„Meine Erwartungen wurden übertroffen, da es eine nette, offene Elternrunde war mit einer tollen Atmosphäre und viel Zeit zum Austausch über aktuelle Alltagsthemen.“\n- Teilnehmerin, STEP Kurs, Kita Rübenkamp, Hamburg",
    "„STEP ermöglicht mir eine zeitgemäße Kindererziehung, bei der jedes Kind mit seinen Stärken und Schwächen respektiert und gefördert wird.“\n- Dr. Astrid Hilgenstock, zwei Kinder, Dinslaken, NRW",
    "„Der Kurs hat mein Familienleben bereichert, den Alltag erleichtert und die Bindung zu meinen Kindern nachhaltig gestärkt.“\n- Kursteilnehmerin, Wedel, Schleswig-Holstein"
]

const stepHelps: IAccordeon[] = [
    {
        heading: "Step ist für alle Eltern geeignet!",
        children: <div>
            <p>STEP hilft  Eltern, den Herausforderungen der Kindererziehung in unserer Zeit nachhaltig gerecht zu werden – sowohl präventiv als auch bei größeren Erziehungsproblemen. Denn alle Eltern wollen das Beste für ihre Kinder.</p>
        </div>
    },
    {
        heading: "Mehr Erziehungskompetenz durch ...",
        children: <div>
            <ul>
                <li>ermutigende Atmosphäre</li>
                <li>Neues erlernen und ausprobieren</li>
                <li>reflektieren und üben</li>
                <li>Beispiele aus dem Alltag</li>
                <li>klare Struktur</li>
            </ul>
            <p>unter der professionellen Leitung des/r zertifizierten Kursleiters/in und im Austausch mit anderen Eltern in der Gruppe.</p>
        </div>
    },
    {
        heading: "Was können Eltern tun, damit ...",
        children: <div>
            <ul>
                <li>Hausaufgaben kein Problem sind?</li>
                <li>Geschwister ihre Konflikte miteinander lösen?</li>
                <li>ihre Kinder zuhause mithelfen?</li>
                <li>ihre Kinder lernen, mit Medien sinnvoll umzugehen?</li>
            </ul>
            <p>Der STEP Kurs hilft Eltern, ein kooperatives, stressfreieres Zusammenleben in der Familie zu erreichen und dauerhaft gute Beziehungen aufzubauen.</p>
        </div>
    },
    {
        heading: "Mit STEP finden Eltern Antworten auf ihre Fragen zum Umgang mit ihren Kindern",
        children: <div>
            <p>z.B wie sie</p>
            <ul>
                <li>wie sie das Verhalten der Kinder aus einer neuen Perspektive verstehen können;</li>
                <li>die Stärken ihrer Kinder fördern ohne Druck auszuüben und ihr Selbstwertgefühl steigern;</li>
                <li>so zuhören, dass die Kinder mit ihnen sprechen, und so mit den Kindern reden, dass sie ihnen zuhören;</li>
                <li>ihre Kinder zu verantwortungsbewusstem Handeln und respektvollem Umgang anleiten;</li>
                <li>Disziplin sinnvoll ausüben und die Kinder innerhalb gesetzter Grenzen entscheiden lassen;</li>
                <li>freundlich und bestimmt sein können und ihre Kinder aus ihren Fehlern lernen lassen.</li>
            </ul>
        </div>
    },
]

const otherContent: IHeadingAndContent[] = [
    {
        heading: "Wissenschaftliche Evaluation",
        children: <div>
            <p>Die Wirksamkeit von STEP wurde durch die wissenschaftliche Evaluation von Klaus Hurrelmann, Professor für Sozial- und Gesundheitswissenschaften, bestätigt.</p>
            <p>Das Bundesministerium für Bildung und Forschung in Deutschland förderte die Evaluation im Rahmen der Präventionsforschung.</p>
        </div>
    },
    {
        heading: "Organisatorisches",
        children: <div>
            <ul>
                <li>Kurse differenziert nach Alter der Kinder (bis 6, ab 6, 13-18 Jahre)</li>
                <li>Professionelles Trainingsmaterial, STEP Elternbücher, Beltz Verlag</li>
                <li>8-10 wöchentliche Treffen</li>
                <li>Kompaktkurse möglich!</li>
            </ul>
        </div>
    },
]


export default function Homepage() {
    return <BlendingInDiv>
        <div className="flex justify-end">
            <StepLogoHomepage />
        </div>

        <div className="flex lg:flex-row flex-col justify-between py-5 px-5">
            <ContentBubbleSlideshow
                contents={
                    elternmeinungen.map(meinung => {
                        return {
                            content: <div>{
                                meinung.split("\n").map((line, i) => <p key={i}>{line}</p>)
                            }</div>
                        }

                    })
                }
                interval={15000}
            />

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

        <div className="my-10 p-5 [&_ul]:ml-5 [&_ul]:list-disc bg-step-200 rounded-lg m-3">
            <SectionHeading>Step hilft bei:</SectionHeading>
            {
                stepHelps.map((help, i) => <Accordeon 
                    key={i} 
                    {...help} 
                    className="bg-gray-200 bg-opacity-30 mt-4 p-4 rounded-lg"
                    headingClassName="text-3xl font-bold p-2"
                />)
            }

            <SectionHeading>Weiteres</SectionHeading>

            {
                otherContent.map((help, i) => <HeadingAndContent 
                    key={i} 
                    {...help} 
                    className="bg-gray-200 bg-opacity-30 mt-4 p-4 rounded-lg"
                    headingClassName="text-3xl font-bold p-2"
                />)
            }
            
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

function SectionHeading({ children }: { children: ReactNode }) {
    return <p className="text-5xl m-5">
        {children}
    </p>
}