import Accordeon from "../components/Accordeon";
import BlendingInDiv from "../components/BlendingInDiv";
import AkupunkturImage from "../assets/images/akupunktur.jpg";
import { HashLink as Link } from "react-router-hash-link";

import YingYang from "../assets/images/yin-yang-green-gpt.png";
import Mindfullness from "../assets/images/mindfulness-svg.svg";

import { Helmet } from "react-helmet";
import Slideshow from "../Slideshow/Slideshow";

export default function Concept() {
    return <BlendingInDiv>
        <Helmet>
            <title>Traditionelle Chinesische Medizin (TCM) - Dr. med. Cordelia Schulz</title>
            <meta name="description" content="Tauchen Sie ein in die Welt der Traditionellen Chinesischen Medizin (TCM) mit Dr. med. Cordelia Schulz. Erfahren Sie mehr über Präventionsmethoden, Kurse und das ganzheitliche Verständnis von Gesundheit." />
        </Helmet>
        <div className="w-full p-5 flex flex-col gap-y-10">

            <h1 className="text-3xl font-bold mx-auto w-fit">
                Traditionelle Chinesische Medizin
            </h1>

            <div className="bg-tcm-100 p-2 bg-opacity-80 rounded-lg">
                <h2 className="text-2xl">
                    Chinesische Tradition und Lebenspflege
                </h2>

                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <Slideshow
                        className="flex-1 mr-0 md:mr-10 pt-3 pb-10 px-10"
                        contents={[
                            { content: <p>Wir alle sind verantwortlich für die Förderung der eigenen Lebenskräfte und spielen somit die zentrale Rolle bei der Gesunderhaltung oder auch im Heilungsprozess. Lebenspflege (Yang Sheng) ist ein wichtiges Thema in China und fußt auf den <Link to="/tcm/concept#5-saeulen-tcm" className="font-bold cursor-pointer">klassischen „5 Säulen“</Link>, die auch die Grundlage der chinesischen Medizin bilden. So kann im Alltag mit bewusster Ernährung, Zubereitung von Tees, Qigong und Selbstmassage dazu beigetragen werden, das körperliche und seelische Gleichgewicht zu finden und zu erhalten.</p> },
                            { content: <p>Der traditionsbewusste chinesische Mensch strebt nicht nach dem Glück, sondern nach dem “Im-Fluss-Sein“, er denkt nicht das Ideal, sondern das Vitale – und dabei sieht er das Leben nicht in den extremen Gegensätzen Glück/Unglück, Geburt/Tod, sondern in dem „Dazwischen“, in dem sich das wahre Leben, Achtsamkeit und Bewusstheit findet.</p> },
                            { content: <p>„Jade, die nicht bearbeitet wird, wird nicht zu einem Gefäß.“</p> },
                        ]}
                    />

                    <img
                        src={Mindfullness}
                        alt=""
                        className=" w-52 h-52 rounded-lg"
                    />
                </div>

            </div>

            <hr className="bg-tcm-300 h-1 w-4/5 rounded mx-auto" />

            <Accordeon
                heading="TCM und Chinesische Medizin"
                className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                headingClassName="text-2xl font-bold mb-2"
            >
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <ul className="[&_li]:list-disc [&_li]:ml-5 space-y-1">
                        <li>
                            Die chinesische Medizin ist ein zusammenhängendes und unabhängiges System des Denkens und der Praxis, das über mehr als zwei Jahrtausende hinweg entwickelt wurde (um 200 v.Chr.) Sie hat über die Jahrhunderte viele Phasen durchlaufen und bezieht auch eine Philosophie und die Sitten einer Zivilisation mit ein, die der unseren in einigen Bereichen fremd sein kann.
                        </li>
                        <li>
                            Die Bezeichnung „Traditionelle Chinesische Medizin“ TCM wurde für das wachsende ausländische Interesse 1955 eingeführt: Traditional Chinese Medicine, in China bleibt zhongyi (Chinesische Medizin) gebräuchlich.
                        </li>
                        <li>
                            Der ganzheitliche und naturbezogene Ansatz der Methoden eignet sich gut für einen präventiven Einsatz.
                        </li>
                    </ul>

                    <img
                        src={YingYang}
                        alt=""
                        className=" w-52 h-52 rounded-lg"
                    />

                </div>
            </Accordeon>

            <hr className="bg-tcm-300 h-1 w-4/5 rounded mx-auto" />

            <div className="flex flex-col gap-y-5" id="5-saeulen-tcm">
                <h2 className="text-2xl">
                    Die „5 Säulen“ oder 5 Methoden der Chinesischen Medizin:
                </h2>
                <Accordeon
                    heading="Akupunktur"
                    className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                    headingClassName="text-2xl font-bold mb-2"
                >
                    <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center md:items-start">
                        <div className="shrink">
                            <p>Die Akupunktur ist die im Westen wohl bekannteste und am weitesten verbreitete Behandlungsmethode der Chinesischen Medizin. Sie gilt als „äußeres Therapieverfahren“. Dabei werden bestimmte Punkte des menschlichen Körpers mit Akupunkturnadeln stimuliert, um die Lebensenergie (Qi) und das Blut (Xue) zu beeinflussen, die nach chinesischer Vorstellung bei einer Krankheit oder bei Beschwerden gestört sind. Durch die Nadeln wird die Störung aufgehoben, sodass Qi und Blut wieder harmonisch fließen können. Grundlage ist dabei die Lehre der Energieleitbahnen (Meridiane).</p>
                            <p>„Alles im Menschen wird durch die Leitbahnen zum Ganzen verknüpft. Sie entscheiden über Leben und Tod. Sie halten Yin und Yang im Gleichgewicht“, liest man in alten Quellen. Gemeinsam mit den inneren Organen und der Körperoberfläche bildet das Leitbahnsystem eine Einheit.  </p>
                        </div>
                        <div className="flex-none">
                            <img
                                src={AkupunkturImage}
                                alt=""
                            />

                        </div>
                    </div>
                </Accordeon>

                <Accordeon
                    heading="Qigong"
                    className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                    headingClassName="text-2xl font-bold mb-2"
                >
                    <p>
                        Bei den vielfältigen Techniken des <span className="font-bold">Qigong</span> (wörtlich "Arbeit" oder "Umgang" mit dem Qi, der vitalen Energie) werden Atmung, Konzentration und Bewegung so aufeinander abgestimmt, dass der Qi-Fluss im Körper direkt gespürt und harmonisiert werden kann. Im Vordergrund steht dabei die Wahrnehmung des Qi und der Umgang damit. Aus diesem Grund hat sich Qigong bei zahlreichen Krankheitsbildern als Selbsttherapie sehr gut bewährt
                    </p>
                </Accordeon>

                <Accordeon
                    heading="Diätetik / Ernährungslehre"
                    className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                    headingClassName="text-2xl font-bold mb-2"
                >
                    <div className="md:w-1/2 mx-auto text-center italic mb-4">
                        <p>
                            “<br />
                            Keinen Unterschied machen,<br />
                            egal, ob Festmahl oder einfache Mahlzeit.<br />
                            Was immer sich auf unserem Teller befindet,<br />
                            ist unser Leben.
                        </p>
                        <p className="mt-1 text-gray-500">(Chinesisches Sprichwort)</p>
                    </div>
                    <p>
                        In der chinesischen Ernährungslehre wird Nahrung zur Prävention – Gesunderhaltung - und zur Heilung von Krankheiten eingesetzt. Die Nahrungsmittel werden den 5 Wandlungsphasen (link!) zugeordnet, auf ihre thermische Wirkung im Körper wird dabei sehr geachtet. Diesen Konzepten lassen sich auch die uns gewohnten Nahrungsmitteln zuordnen. So können wir unser Essen nach den gut durchdachten Vorstellungen der chinesischen Ernährungslehre zubereiten, ohne dabei auf fremde Produkte zurückgreifen zu müssen.
                    </p>
                </Accordeon>

                <Accordeon
                    heading="Chinesische Arzneimitteltherapie (CAT) und Phytotherapie"
                    className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                    headingClassName="text-2xl font-bold mb-2"
                >
                    <p>Der klinische Einsatz von Heilkräutern macht ca. 3/4 aller Behandlungen in den TCM-Krankenhäusern in China aus - im Westen ist er viel geringer. Die CAT wird als „inneres Therapieverfahren“ bezeichnet und basiert auf den gleichen Grundlagen wie die chinesische Ernährungslehre. Verwendet werden überwiegend pflanzliche Mittel (Blüten, Blätter, Früchte, Stängel, Rinden, Wurzeln, Samen…), zum kleinen Teil kommen auch mineralische oder tierische Bestandteile vor. Der Artenschutz für bedrohte Pflanzen und Tiere und die Qualität der Produkte wird in Deutschland durch die Apotheken streng beachtet. </p>
                    <p>Auch westliche Heilpflanzen können dem chinesischen Arzneimittelsystem zugeordnet und therapeutisch eingesetzt werden.</p>
                </Accordeon>

                <Accordeon
                    heading="Tuina (Schub- und Zugmassage)"
                    className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                    headingClassName="text-2xl font-bold mb-2"
                >
                    <p>
                        Tuina („Schieben und Greifen“) beinhaltet massierende, passiv mobilisierende und chiropraktische Behandlungstechniken. So werden „Blockaden“ beseitigt und durch gezielte Impulse Heilreize gesetzt, wodurch die körpereigenen Strukturen zur Selbstheilung angeregt werden.
                    </p>
                </Accordeon>

            </div>

            <hr className="bg-tcm-300 h-1 w-4/5 rounded mx-auto" />

            <Accordeon
                heading="Kleiner philosophischer Exkurs"
                className="bg-tcm-100 rounded-lg box-border p-2 bg-opacity-80"
                headingClassName="text-2xl font-bold mb-2"
            >
                <p>Die <span className="font-bold">Drei Lehren</span> des Landes sind der <span className="font-bold">Konfuzianismus, der Daoismus und der Buddhismus</span>.</p>

                <ul className="[&_li]:list-disc [&_li]:ml-5 space-y-1">
                    <li>
                        Sie ergänzen sich gegenseitig:<br />
                        So war ein chinesischer Beamter in seiner Amtsausführung selbstverständlich <span className="underline">Konfuzianer</span>. Legte er Wert auf lebensverlängernde Maßnahmen, so war er <span className="underline">Daoist</span>, und starb jemand in der Familie, so konsultierte er einen <span className="underline">buddhistischen</span> Mönch, da die Buddhisten den besten Kontakt zum Jenseits hatten. Diese Haltung spiegelt sich in dem Satz eines chinesischen Kaisers der Ming-Dynastie wider: „Die Drei Lehren sind eins.“

                    </li>
                    <li>
                        Zwischen philosophischem und religiösem Daoismus bestehen zwar teils gewichtige Unterschiede, letztlich sind die beiden aber nicht scharf voneinander abzugrenzen, die historischen Ursprünge liegen im 4. Jh. v. Chr., als das Daodejing entstand.
                    </li>
                    <li>
                        <span className="font-bold">Ziran</span> ist ein Schlüsselbegriff des Daoismus, der wörtlich „Selbst-so; so-aus-sich-heraus; von-selbst-so“ bedeutet. Der Begriff steht für Natürlichkeit, Spontaneität und Wandlungsfähigkeit und ist eng mit <span className="font-bold">Wuwei</span> verknüpft: „Der Weise verweile im Wirken ohne Handeln (Wuwei), in der Belehrung ohne Worte“.
                    </li>
                    <li>
                        Dieses Nicht-Eingreifen in allen Lebensbereichen erscheint in der westlichen Welt zunächst utopisch und weltfremd. Es beruht auf der Einsicht, dass das Dao, welches aller Dinge Ursprung und Ziel ist, von selbst zum Ausgleich aller Kräfte und damit zur optimalen Lösung drängt. <br />
                        Das „Nicht-Handeln“ oder „Nicht-Erzwingen“ bedeutet genaugenommen die „Enthaltung eines gegen die Natur gerichteten Handelns“.
                    </li>
                </ul>
            </Accordeon>
        </div>
    </BlendingInDiv>
}