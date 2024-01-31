import { ReactNode } from "react";

export default interface IBookProp {
    title: string;
    link: string;
    image: string;
    description: ReactNode;
}