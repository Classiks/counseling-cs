import IBookProp from "./IBookProp"

export default function Book({ title, link, image, description }: IBookProp) {
    return <div className="flex flex-col p-4">
        <h1 className="text-3xl mb-2">
            {title}
        </h1>
        <div className="flex flex-col md:flex-row bg-gray-100 bg-opacity-80 p-2 rounded-md items-center gap-5">
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
    </div>
}