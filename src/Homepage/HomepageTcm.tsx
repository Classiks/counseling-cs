import { useNavigate } from "react-router-dom";
import Portrait from "../assets/images/cs-portrait-standing.jpg";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomepageTcm() {
    const navigate = useNavigate();

    return <div className="flex flex-col items-center gap-y-5 p-5">
        <Helmet>
            <title>Willkommen bei TCM mit Dr. med. Cordelia Schulz</title>
            <meta name="description" content="Willkommen auf der offiziellen TCM-Homepage von Dr. Cordelia Schulz. Entdecken Sie umfassende Informationen zu den Kursen, dem Konzept der Traditionellen Chinesischen Medizin, Einblicke in die Arbeit von Cordelia Schulz und wie Sie Kontakt aufnehmen können." />
        </Helmet>

        <h1 className="font-bold text-2xl text-center m-10">
            <p className="text-lg text-muted">Dr. med Cordelia Schulz</p>
            <p>Herzlich Willkommen auf meiner Webseite</p>
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                    <img src={Portrait} alt="Portrait" className="-translate-y-8" />
                </div>

                <Button onClick={() => navigate("/tcm/courses")} >
                    Zu den Kursen
                </Button>

                <Card>
                    <CardContent className="p-5 space-y-3">
                        <p>
                            Selbstfürsorge auf der Basis der Naturheilkunde und der chinesischen Medizin liegt mir sehr am Herzen. Mein Arbeitsschwerpunkt besteht darin, die Möglichkeiten der „Hilfe zur Selbsthilfe“ zu vermitteln.
                        </p>

                        <p>
                            Deshalb habe ich nach 20 Jahren ärztlicher Tätigkeit meinen Schwerpunkt in die Prävention in Form von Kursangeboten verlagert. In diesen Kursen werden sowohl allgemeine ganzheitliche Grundlagen nahegebracht als auch für die individuelle Lebenssituation hilfreiche Themenschwerpunkte behandelt.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div >
}
// import { useNavigate } from "react-router-dom";
// import Portrait from "../assets/images/cs-portrait-standing.jpg";

// export default function HomepageStep() {
//     const navigate = useNavigate();

//     return <div className="flex flex-col items-center gap-y-5 p-5">
//         <h1 className="font-bold text-2xl text-center m-10">
//             <p className="text-lg text-gray-500">Dr. med Cordelia Schulz</p>
//             <p>Herzlich WIllkommen auf meiner Webseite</p>
//         </h1>

//         <div className="flex flex-col md:flex-row gap-10">
//             <div className="flex flex-col items-center justify-center gap-5">
//                 <div className="w-64 h-64 rounded-full overflow-hidden">
//                     <img src={Portrait} alt="Portrait" className="-translate-y-8" />
//                 </div>

//                 <button
//                     className={"py-2 px-3 rounded-lg cursor-pointer bg-step-300 text-lg font-bold animate-pulse"}
//                     onClick={() => navigate("/step/courses")}
//                 >
//                     Zu den Kursen
//                 </button>
//             </div>

//             <div className="p-5 bg-step-200 mx-3">
//                 <p>
//                     Die Betreuung und Arbeit mit Kindern und Jugendlichen war und ist ein zentraler Teil meines privaten und beruflichen Lebens. Ich erfahre täglich, wie wichtig es ist, früh eine stabile Basis für ein gesundes, verantwortungsvolles und selbstwirksames Leben zu ermöglichen.
//                 </p>

//                 <p>
//                     Diese Erfahrung bezieht sich sowohl auf das Miteinander in meiner Familie mit 4 erwachsenen Söhnen, als auch auf meine Tätigkeit als Ärztin.
//                 </p>

//                 <p>
//                     Meine Elternkurse sind in zwei aufeinander aufbauende Kurse aufgeteilt. So kann das Konzept in Ruhe und Schritt für Schritt ausprobiert - und in Übereinstimmung mit den eigenen Wertvorstellungen umgesetzt werden.
//                 </p>
//             </div>
//         </div>
//     </div >
// }