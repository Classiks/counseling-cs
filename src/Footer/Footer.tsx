import { useEffect, useState } from "react";

import ModeController from "../ModeController";
import Mode from "../components/Mode";

import FooterLinks from "./FooterLinks";


interface IFooterProps {
    className?: string
}
export default function Footer({ className }: IFooterProps) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    return <div className={"border-b-2 sticky bottom-0 z-[5000] w-full " + className}>{
        <ModeFooter mode={mode} />
    }</div>
}

interface ITemplateFooterProps {
    className?: string,
}
function TemplateFooter({ className }: ITemplateFooterProps) {
    return <div className={className}>
            <FooterLinks className="justify-center p-3" />
        </div>
}

function ModeFooter({ mode }: { mode: Mode }) {
    switch (mode) {
        case Mode.STEP:
            return <FooterStep />
        case Mode.TCM:
            return <FooterTcm />
        default:
            return <div />
    }
}

export function FooterStep() {
    return <TemplateFooter 
        className="bg-step text-step-text"
    />
}

export function FooterTcm() {
    return <TemplateFooter
        className="bg-tcm text-tcm-text"
    />
}