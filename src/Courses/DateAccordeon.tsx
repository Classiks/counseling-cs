import Accordeon from "../components/Accordeon"
import { twMerge } from "tailwind-merge";

interface IDateData {
    day?: string,
    date?: string,
    time?: string,
    location?: string
}

interface IDateAccordeon {
    className?: string,
    headingClassName?: string,
    dates: IDateData[]
}
export default function DateAccordeon({ className="", dates }: IDateAccordeon) {
    return <Accordeon
        className={twMerge("p-2 mt-2", className)}
        heading="Alle Termine"
        headingClassName="text-lg font-bold"
    >
        <ul className="list-disc [&_li]:ml-5 mt-3">{
            dates.map((date, index) => (
                <li key={index}>
                    {
                        [date.day, date.date, date.time, date.location]
                            .filter( Boolean )
                            .join(", ")
                    }
                </li>
            ))
        }</ul>
    </Accordeon>
}