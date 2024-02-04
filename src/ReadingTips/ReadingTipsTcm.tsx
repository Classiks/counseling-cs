import BlendingInDiv from "../components/BlendingInDiv"
import Content from "./Content"
import { LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR } from "./TcmBooks"

import { Helmet } from "react-helmet";

export default function ReadingTips() {
    const books = [ LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR ];
    return <BlendingInDiv className="[&_li]:list-disc [&_li]:ml-5">
        <Helmet>
            <title>Lesetipps - Traditionelle Chinesische Medizin (TCM)</title>
            <meta name="description" content="Erkunden Sie empfohlene Lektüren zur Vertiefung Ihres Wissens in der Traditionellen Chinesischen Medizin (TCM), darunter Grundlagenwerke, praktische Anleitungen und mehr." />
        </Helmet>
        <Content books={books} />
    </BlendingInDiv>
}

