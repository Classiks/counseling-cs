import IBookProp from "./IBookProp";
import Book from "./Book";

interface IContentProps {
    books: IBookProp[]
}
export default function Content({ books }: IContentProps) {

    
    return <div
        className="flex flex-col flex-grow p-5"
    >{
            books.map(book => <div>
                <Book {...book} />
                <hr />
            <div></div>
        </div>)
    }</div>
}
