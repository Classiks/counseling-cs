import { ReactNode } from "react";
import { SwitchButtonStep, SwitchButtonTcm } from "../components/SwitchButton";
import Logo from "../assets/images/icon_v1_cropped.png";

import { motion } from "framer-motion";

export default function EntryPage() {
    return <AppearingDiv className="flex flex-col xl:flex-row w-full h-screen relative">
        <GoToButtonArea className="bg-step">
            <SwitchButtonStep />
        </GoToButtonArea>
        <GoToButtonArea className="bg-tcm">
            <SwitchButtonTcm />
        </GoToButtonArea>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={Logo} alt="Logo" />
        </div>
    </AppearingDiv>
}

interface IGoToButtonArea {
    children: ReactNode;
    className?: string;
}
function GoToButtonArea({ children, className }: IGoToButtonArea) {
    return <div className={"flex xl:w-1/2 h-screen justify-center items-center " + className}>
        <ButtonFrame>
            {children}
        </ButtonFrame>
    </div>
}


interface IAppearingDivProps {
    children: React.ReactNode;
    className?: string;
}
function AppearingDiv({ children, className }: IAppearingDivProps) {
    return <motion.div
        className={className}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1}}
    >
        {children}
    </motion.div>
}

interface ButtonFrameProps {
    children: ReactNode;
    className?: string;
}
function ButtonFrame({ children, className }: ButtonFrameProps) {
    return <div className={"bg-gray-200 rounded-[50%] px-14 py-10 hover:scale-110 transition-transform duration-1000 z-10 " + className}>
        {children}
    </div>
}












































