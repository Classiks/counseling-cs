import { ReactNode } from "react";

import Cartoon from "../assets/images/cartoon-family-conference.png";

import StepLogo from "../assets/images/step_6+.jpg";
import Slideshow from "../Slideshow/Slideshow";
import BlendingInDiv from "../components/BlendingInDiv";
import { ContentBubbleSlideshow } from "./ContentBubble";
import Accordeon, { IAccordeon } from "../components/Accordeon";
import { Content } from "../Slideshow/Slideshow";

import GirlsInHammock from "../assets/images/girls-hammock.jpg";
import ParentChildConcrete from "../assets/images/parent-child-concrete.jpg";
import ChildOnArm from "../assets/images/adult-child-on-arm-black-white.jpg";
import NewbornFist from "../assets/images/adult-child-fist.jpg";

import { Helmet } from 'react-helmet';

const elternmeinungen: string[] = [
    "Je mehr ein Kind beginnt Grenzen auszutesten, desto klarer muss man sie abstecken. Aber mit Respekt und Freundlichkeit – das ist die Basis des STEP Programms.“\n- Natalie Bettermann, Interview in „Eltern“",
    "„Meine Erwartungen wurden übertroffen, da es eine nette, offene Elternrunde war mit einer tollen Atmosphäre und viel Zeit zum Austausch über aktuelle Alltagsthemen.“\n- Teilnehmerin, STEP Kurs, Kita Rübenkamp, Hamburg",
    "„STEP ermöglicht mir eine zeitgemäße Kindererziehung, bei der jedes Kind mit seinen Stärken und Schwächen respektiert und gefördert wird.“\n- Dr. Astrid Hilgenstock, zwei Kinder, Dinslaken, NRW",
    "„Der Kurs hat mein Familienleben bereichert, den Alltag erleichtert und die Bindung zu meinen Kindern nachhaltig gestärkt.“\n- Kursteilnehmerin, Wedel, Schleswig-Holstein"
]

const stepHelps: IAccordeon[] = [
    {
        heading: "Was ist die Grundidee von STEP?",
        children: <div className="flex flex-col md:flex-row gap-16">
            <div className="space-y-3">
                <p>
                    Das Konzept basiert auf der Individualpsychologie, die folgende Ausgangsthese hat: <span className="font-bold">Der Mensch ist ein soziales Wesen. Sein Verhalten ist darauf ausgerichtet, ein Gefühl der Zugehörigkeit zu erlangen.</span> Wenn einem Kind dies auf positive Art nicht gelingt, fühlt es sich entmutig und versucht, das Ziel der Zugehörigkeit mit störendem Verhalten zu erreichen.
                </p>

                <p>
                    Die Individualpsychologie, die Adler und sein bedeutendster Schüler Dreikurs entwickelt haben, unterstützt einen demokratischen Erziehungsstil, der unseren Kindern Selbstdisziplin beibringt. Diese Selbstdisziplin ist notwendig, damit unsere Kinder mit der zunehmenden Verantwortung, der sie gewachsen sein müssen, und dem größeren Freiraum, den sie beanspruchen und brauchen, umgehen können.
                </p>
                <p>
                    STEP kommt unserem Bedürfnis entgegen, zu wissen wann und wie wir Grenzen setzen können. Es stellt uns bei der Erziehung unserer Kinder einen roten Faden zur Verfügung und hilft uns damit, unseren Kindern die Sicherheit zu bieten, die sie brauchen, um ihre Grenzen auszutesten, die Konsequenzen ihrer eigenen Entscheidungen zu erfahren und damit die Chance zu haben, daraus zu lernen.
                </p>
            </div>
            <img
                src={Cartoon}
                alt=""
                className="rounded-2xl h-96 p-3 bg-white mx-auto"
            />
        </div>
    },
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

const scientificEvaluation: string[] = [
    "Die Wirksamkeit von STEP wurde durch die wissenschaftliche Evaluation von Klaus Hurrelmann, Professor für Sozial- und Gesundheitswissenschaften, bestätigt.",
    "Das Bundesministerium für Bildung und Forschung in Deutschland förderte die Evaluation im Rahmen der Präventionsforschung."
]


export default function Homepage() {
    const opinionContents: ReactNode[] = elternmeinungen.map(meinung => {
        return <div>
            <p className="text-xl font-bold mb-2">
                Meinung von Kursteilnehmenden
            </p>
            {
                meinung.split("\n").map((line, i) => <p key={i}>{line}</p>)
            }
        </div>
    });
    const opinionInterfaces: Content[] = opinionContents.map(meinung => { return { content: meinung } });

    const scientificContent: ReactNode[] = scientificEvaluation.map(evaluation => {
        return <div>
            <p className="text-xl font-bold mb-2">
                Wissenschaftliche Evaluation
            </p>
            <p>{evaluation}</p>
        </div>
    });
    const scientificInterfaces: Content[] = scientificContent.map(evaluation => { return { content: evaluation } });

    return <BlendingInDiv className="space-y-16">
        <Helmet>
            <title>STEP - Systemische Elternbildung und Familienförderung</title>
            <meta name="description" content="Erfahren Sie mehr über das STEP-Programm für Eltern und Erziehende. Entdecken Sie Kurse, Ressourcen und Techniken für eine wertschätzende und effektive Kindererziehung und Familienkommunikation." />
        </Helmet>
        <div className="md:float-end pt-10 md:p-0 w-fit mx-auto">
            <StepLogoHomepage />
        </div>

        <div className="p-5 [&_ul]:ml-5 [&_ul]:list-disc bg-step-200 rounded-lg m-3">
            <div className="space-y-3 mb-10 leading-relaxed">
                <p>
                    Als Eltern erleben wir nicht nur das Glück und die Freude, unsere Kinder in ihre Lebenswelt hineinwachsen zu sehen - wir kennen auch Situationen, in denen wir uns hilflos fühlen und uns fragen: Wie weit können die Freiräume in welchem Alter gehen und wie sollen wir Grenzen setzen? Verstehen wir die Bedürfnisse unseres Kindes? Wo liegt die Grenze zwischen Fördern und Überfordern? Welche Haltung und Worte wählen wir bei alltäglichen Auseinandersetzungen?
                </p>
                <p>
                    So viele Ratgeber wir auch lesen mögen… was setzen wir davon im Alltag um? Im Elternkurs setzen wir uns mit den wichtigsten Erziehungsthemen auseinander und durchleben sie in einer wertschätzenden und respektvollen Gruppenatmosphäre mit Hilfe von Rollenspielen, Kleingruppenarbeit und „lebendigem Lehrmaterial“ mit einer neuen Perspektive. Es ist dabei nicht entscheidend, ob der Kurs vorausschauend oder hilfesuchend angesteuert wird. Das STEP-Konzept arbeitet mit vielen praktischen Übungen, ist gut strukturiert und baut auf fundierten wissenschaftlichen Erkenntnissen auf. Der Erfahrungsaustausch innerhalb der Kursgruppe ist ein wichtiger Baustein; dabei wird berücksichtigt, dass jede Familie ihre individuellen Wertvorstellungen hat. Es macht richtig Freude, mithilfe des Kurses Schritt für Schritt ein vertrauensvolles und entspanntes Miteinander in der Familie umzusetzen, Humor ist dabei sehr willkommen!
                </p>
            </div>

            {
                stepHelps.map((help, i) => <Accordeon
                    key={i}
                    {...help}
                    className="bg-gray-200 bg-opacity-30 mt-4 p-4 rounded-lg"
                    headingClassName="text-xl font-bold p-2"
                />)
            }
        </div>

        <div className="w-full flex justify-center">
            <Slideshow
                className="lg:w-1/2 w-3/4 aspect-square rounded-full"
                contents={[
                    { image: GirlsInHammock, },
                    { image: ParentChildConcrete },
                    { image: ChildOnArm },
                    { image: NewbornFist },
                ]}
                delay={12000}
            />
        </div>

        <div className="flex flex-col p-5 w-full justify-center xl:flex-row xl:justify-between [&_div]:mx-auto [&_div]:xl:mx-5">{
            [
                [opinionInterfaces, 15000],
                [scientificInterfaces, 14000]
            ].map((interfacesWithInterval, i) => {
                return <div key={i} className="mx-auto xl:mx-5 w-4/5 xl:w-[45%]">
                    <ContentBubbleSlideshow
                        className="bg-step bg-opacity-70 rounded-[50%] p-12 my-5 text-md"
                        contents={interfacesWithInterval[0] as Content[]}
                        delay={interfacesWithInterval[1] as number}
                    />
                </div>
            })
        }</div>

        <div className="my-10 p-5 [&_ul]:ml-5 [&_ul]:list-disc bg-step-200 rounded-lg m-3">
            <SectionHeading>Organisatorisches</SectionHeading>

            <div className="bg-gray-200 bg-opacity-30 mt-4 p-4 rounded-lg">
                <ul>
                    <li>Kurse differenziert nach Alter der Kinder (bis 6, ab 6, 13-18 Jahre)</li>
                    <li>Professionelles Trainingsmaterial, STEP Elternbücher, Beltz Verlag</li>
                    <li>8-10 wöchentliche Treffen</li>
                    <li>Kompaktkurse möglich!</li>
                </ul>
            </div>
        </div>

        <div className="h-2" />

    </BlendingInDiv>
}

function StepLogoHomepage() {
    return <div className="w-64 p-10 bg-white border-2 border-black rounded-[50%] mx-5 my-2">
        <img
            src={StepLogo}
            className=""
            alt=""
        />
    </div>
}

function SectionHeading({ children }: { children: ReactNode }) {
    return <p className="text-2xl md:text-3xl m-5">
        {children}
    </p>
}