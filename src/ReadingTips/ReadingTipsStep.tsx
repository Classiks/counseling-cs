import BlendingInDiv from "../components/BlendingInDiv"
import Content from "./Content"
import { STEP_before_6, STEP_after_6, STEP_teenager, STEP_erzieher, STEP_lehrer, GESPR_KINDER, GESPR_JUGDL, FAMILIENRAT, KINDER_FORDERN_HERAUS } from "./StepBooks"

import { Helmet } from "react-helmet";

export default function ReadingTips() {
    const books = [STEP_before_6, STEP_after_6, STEP_teenager, STEP_erzieher, STEP_lehrer, GESPR_KINDER, GESPR_JUGDL, FAMILIENRAT, KINDER_FORDERN_HERAUS];
    return <BlendingInDiv className="[&_li]:list-disc [&_li]:ml-5">
        <Helmet>
            <title>Lesetipps - Empfehlungen für Eltern und Erziehende</title>
            <meta name="description" content="Entdecken Sie eine sorgfältig zusammengestellte Auswahl an Büchern und Ressourcen für Eltern und Erziehende im Rahmen des STEP-Programms. Finden Sie Inspiration und praktische Ratschläge." />
        </Helmet>
        <Content books={books} />
    </BlendingInDiv>
}

