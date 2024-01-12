import Content from "./Content"
import { PHYTO_THEORIE_PRAXIS, TRADIT_HEILPFLZ } from "./TcmBooks"

export default function ReadingTips() {
    const books = [PHYTO_THEORIE_PRAXIS, TRADIT_HEILPFLZ]
    return <Content books={books} />
}

