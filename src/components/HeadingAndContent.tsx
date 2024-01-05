import { ReactNode } from "react"


export interface IHeadingAndContent {
    className?: string,
    headingClassName?: string,
    childrenClassName?: string,
    heading: string,
    children: ReactNode,
}
export default function HeadingAndContent({ heading, children, className, headingClassName, childrenClassName }: IHeadingAndContent) {
    return <div className={className}>
        <p className={headingClassName}>
            {heading}
        </p>
        <div className={childrenClassName}>
            {children}
        </div>
    </div>;
}