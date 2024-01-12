import { ReactNode, useEffect, useState } from "react";

import ModeController from "../ModeController";
import Mode from "../components/Mode";

import LoadingAnimation from "./LoadingAnimation"

import { SwitchButtonStep, SwitchButtonTcm } from "../components/SwitchButton";
import HeaderLinks from "./HeaderLinks";
import LogoAndTitle from "./LogoAndTItle";


export default function Header({ className }: { className?: string }) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    return <div className={"border-b-2 sticky top-0 z-[5000] w-full " + className}>{
        <ModeHeader mode={mode} />
    }</div>
}

interface ITemplateHeaderProps {
    className?: string,
    button: ReactNode,
}
function TemplateHeader({ className, button }: ITemplateHeaderProps) {
    className = "grid grid-cols-8 " + className;

    return <LoadingAnimation className={className}>
        <LogoAndTitle className="col-span-2" />
        <HeaderLinks className="col-span-4 justify-center" />
        <div className="flex justify-end col-span-2">
            {button}
        </div>
    </LoadingAnimation>
}

function ModeHeader({ mode }: { mode: Mode }) {
    switch (mode) {
        case Mode.STEP:
            return <HeaderStep />
        case Mode.TCM:
            return <HeaderTcm />
        default:
            return <div />
    }
}

export function HeaderStep() {
    return <TemplateHeader 
        className="bg-step text-step-text"
        button={<SwitchButtonTcm />}
    />
}

export function HeaderTcm() {
    return <TemplateHeader
        className="bg-tcm text-tcm-text"
        button={<SwitchButtonStep />}
    />
}