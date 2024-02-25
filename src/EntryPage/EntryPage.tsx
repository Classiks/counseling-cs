import { ReactNode } from "react";
import { SwitchButtonStep, SwitchButtonTcm } from "../components/SwitchButton";
import Logo from "../assets/images/icon_v1_cropped.png";

import { motion } from "framer-motion";

import { Helmet } from "react-helmet";
import { twMerge } from "tailwind-merge";

export default function EntryPage() {
    return <AppearingDiv className="">
        <Helmet>
            <title>Dr. med. Cordelia Schulz - Förderung von Familienleben und ganzheitlicher Gesundheit</title>
            <meta name="description" content="Entdecken Sie mit Dr. med. Cordelia Schulz Ansätze zur Familienförderung durch das STEP-Programm und zur Steigerung des Wohlbefindens mit Traditioneller Chinesischer Medizin (TCM). Entdecken Sie neue Möglichkeiten für einen ausgeglichenen und gesunden Lebensstil." />
        </Helmet>
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 h-screen w-screen">
            <GoToButtonArea className="bg-step">
                <p className="flex items-center text-center justify-center text-4xl p-10">
                    Systematisches Training für Eltern und Pädagogen 
                </p>
                <div className="flex items-center justify-center">
                    <ButtonFrame>
                        <SwitchButtonStep title="Zur Webseite" />
                    </ButtonFrame>
                </div>
            </GoToButtonArea>
            <div className="flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-step to-tcm">
                <img src={Logo} alt="Logo" className="max-w-96 max-h-96 z-20" />
            </div>
            <GoToButtonArea className="bg-tcm">
                <div className="flex items-center justify-center md:order-last">
                    <ButtonFrame>
                        <SwitchButtonTcm title="Zur Webseite" />
                    </ButtonFrame>
                </div>
                <p className="flex items-center text-center justify-center text-4xl p-10">
                    Traditionelle Chinesische Medizin
                </p>
            </GoToButtonArea>
        </div>
    </AppearingDiv>
}

interface IGoToButtonArea {
    children: ReactNode;
    className?: string;
}
function GoToButtonArea({ children, className }: IGoToButtonArea) {
    return <div className={twMerge("w-screen md:w-auto md:h-screen grid grid-rows-2 grid-cols-1", className)}>
        {children}
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
        transition={{ duration: 1 }}
    >
        {children}
    </motion.div>
}

interface ButtonFrameProps {
    children: ReactNode;
    className?: string;
}
function ButtonFrame({ children, className }: ButtonFrameProps) {
    return <div className={twMerge(
        "bg-gray-200 rounded-[50%] px-14 py-10 hover:scale-110 transition-transform duration-1000 flex items-center justify-center w-64 h-28",
        className
    )}>
        {children}
    </div>
}












































