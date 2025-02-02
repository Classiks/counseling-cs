import IBookProp from "./IBookProp"
import { Card, CardHeader, CardContent } from "../components/ui/card"

export default function Book({ title, link, image, description }: IBookProp) {
    return <Card>
        <CardHeader>
            <h1 className="text-3xl mb-2">
                {title}
            </h1>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col md:flex-row p-2 rounded-md items-center gap-5">
                <img
                    src={image}
                    alt={title}
                    className="w-48 h-72 mb-4 cursor-pointer"
                    onClick={() => window.open(link, "_blank")}
                />
                <span className="whitespace-pre-wrap">
                    {description}
                </span>
            </div>
        </CardContent>
    </Card>
}