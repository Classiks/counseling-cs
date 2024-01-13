import BackgroundTcm from "../assets/images/background-tcm.jpg";
import BackgroundStep from "../assets/images/background-step.jpg";
import Mode from "../components/Mode";
import { useState, ReactNode, useEffect } from "react";

import ModeController from "../ModeController";

interface IBackgroundImage {
    children: ReactNode,
    className?: string,
    style?: React.CSSProperties,
}
export default function BackgroundImage({ children, className, style }: IBackgroundImage) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    const image = getBgImage(mode);


    return <div className={className} style={{
        ...style,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
    }}>
        {children}
    </div>
}


function getBgImage(mode: Mode) {
    switch (mode) {
        case Mode.STEP:
            return BackgroundStep
        case Mode.TCM:
            return BackgroundTcm
        default:
            return ""
    }
}