import { ReactNode, useState } from "react";
import Logo from "./assets/images/chat_gpt_logo_cropped.png";
import { Mode } from "./dataclasses/Mode";

import routes from "./Routing/Routes";

export default function Test() {
    return <div className="flex flex-col h-screen relative">
        <Navbar />
        <Body />
    </div>;
}

function Navbar() {
    const [ selected, setSelected ] = useState(0)

    return <div className=" fixed bottom-0 md:top-0 w-full bg-indigo-500 mix-blend-multiply h-16">
        <div className="w-full justify-between px-6 flex h-full">
            <div className="flex gap-4 items-center">
                <img src={Logo} alt="" className="h-12" />
                <p className="text-3xl font-bold hidden 2xl:block">Dr. med. Cordelia Schulz</p>
            </div>
            <div className="flex flex-1 gap-4 justify-center lg:justify-end items-center">{
                routes.get(Mode.STEP)?.map((e, i) => <div
                    className="p-3"
                    onClick={() => setSelected(i)}
                >
                    <Tab icon={e.icon} text={e.title} className={selected === i ? " bg-red-200" : ""} />
                </div>)
            }</div>
        </div>
    </div>;
}

interface ITab {
    className?: string,
    icon: ReactNode,
    text: string,
}
function Tab({ icon, text, className }: ITab) {
    return <div className={"flex gap-2 text-3xl items-center  active:bg-indigo-200 transition-colors duration-500 " + className}>
        <div className="text-9xl flex items-center">{icon}</div>
        <p className="hidden lg:block">{text}</p>
    </div>
}

function Body() {
    return <div className="bg-amber-500 flex-grow overflow-auto mb-16 md:mb-0 md:mt-16">
        <div>{
            Array.from({ length: 100 }).map((_, i) => <div key={i} className="text-xl font-bold">{i}</div>)
        }</div>
    </div>;
}