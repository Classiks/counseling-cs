import { motion } from "framer-motion";
import IBookProp from "./IBookProp";
import Book from "./Book";

interface IContentProps {
    books: IBookProp[]
}
export default function Content({ books }: IContentProps) {

    return <motion.ul
        className="flex flex-col flex-grow p-5"
        variants={container}
        initial="hidden"
        animate="visible"
    >{
            books.map(book => <motion.li variants={item}>
                <Book {...book} />
                <hr />
            </motion.li>)

    }</motion.ul>
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.4
        }
    }
};

const item = {
    hidden: { y: 5, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};
