import BlendingInDiv from "../components/BlendingInDiv"
import Content from "./Content"
import { LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR, GESETZ_BALANCE, HND_CHK } from "./TcmBooks"

import { Helmet } from "react-helmet";

export default function ReadingTips() {
    const books = [ GESETZ_BALANCE, LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR, HND_CHK ];
    return <BlendingInDiv className="[&_li]:list-disc [&_li]:ml-5">
        <Helmet>
            <title>Lesetipps - Traditionelle Chinesische Medizin (TCM)</title>
            <meta name="description" content="Erkunden Sie empfohlene Lektüren zur Vertiefung Ihres Wissens in der Traditionellen Chinesischen Medizin (TCM), darunter Grundlagenwerke, praktische Anleitungen und mehr." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">Lesetipps</h1>
        </div>
        <Content books={books} />
    </BlendingInDiv>
}

