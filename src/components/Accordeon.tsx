import { ReactNode, useEffect, useRef, useState } from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export interface IAccordeon {
    className?: string,
    headingClassName?: string,
    childrenClassName?: string,
    heading: string,
    children: ReactNode,
}
export default function Accordeon({ heading, children, className, headingClassName, childrenClassName }: IAccordeon) {
    const [isOpen, setIsOpen] = useState(false);
    const openClassName: string = "max-h-[3000px] opacity-100";
    const closedClassName: string = "max-h-0 opacity-0 overflow-hidden";
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [isOpen]);

    return <div ref={ref} className="md:scroll-mt-20">
        <div
            className={"flex flex-col rounded-lg " + className}
        >
            <div className={headingClassName}>
                <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p> {heading} </p>
                    {
                        isOpen
                            ? <KeyboardArrowUp />
                            : <KeyboardArrowDown />
                    }
                </div>
            </div>

            <div className={childrenClassName}>
                <div
                    className={`items-center transition-all duration-500 ${isOpen ? openClassName : closedClassName}`}
                >
                    {children}
                </div>
            </div>
        </div>
    </div>;
}