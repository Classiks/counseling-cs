import BlendingInDiv from "../components/BlendingInDiv"
import Content from "./Content"
import { STEP_before_6, STEP_after_6, Systemisch_Schlippe } from "./StepBooks"

export default function ReadingTips() {
    const books = [STEP_before_6, STEP_after_6, Systemisch_Schlippe]
    return <BlendingInDiv>
        <Content books={books} />
    </BlendingInDiv>
}

