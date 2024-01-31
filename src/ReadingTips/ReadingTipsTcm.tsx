import BlendingInDiv from "../components/BlendingInDiv"
import Content from "./Content"
import { LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR } from "./TcmBooks"

export default function ReadingTips() {
    const books = [ LEITFADEN_CM, CHIN_ERN, QIGONG_15, LEIT_TUNIA, LEHR_HEILPFL, HND_AKKUPR ];
    return <BlendingInDiv className="[&_li]:list-disc [&_li]:ml-5">
        <Content books={books} />
    </BlendingInDiv>
}

