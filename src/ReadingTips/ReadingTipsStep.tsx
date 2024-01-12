import Content from "./Content"
import { STEP_before_6, STEP_after_6, Systemisch_Schlippe } from "./StepBooks"

export default function ReadingTips() {
    const books = [STEP_before_6, STEP_after_6, Systemisch_Schlippe]
    return <div className="mx-auto md:w-3/4 xl:w-[60%]">
        <Content books={books} />
    </div>
}

