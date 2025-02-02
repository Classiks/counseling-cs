import { useLocation, useNavigate } from "react-router-dom";

import Mode from "../components/Mode";
import ModeController from "../ModeController";
import UrlParser from "./UrlParser";
import routes from "../Routing/Routes";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

interface ISwitchButtonProps {
    mode: Mode
    targetPageTitle: string,
    className?: string,
}

export default function SwitchButton({ mode, targetPageTitle, className }: ISwitchButtonProps) {
    const navigate = useNavigate();
    const location = useLocation()

    return <Button 
        className={className}
        onClick={() => {
            ModeController.setMode(mode);
            
            const page: string = UrlParser.getPageFromUrl(location);
            const path: string = `/${mode}/${page}`;
            const pathExists: boolean = routes.get(mode)?.some(route => route.path === path) ?? false;


            navigate(pathExists ? path : `/${mode}`);
        }}
    >
        {targetPageTitle}
    </Button>;
}

interface ISpecificSwitchButtonProps {
    title?: string;
    className?: string;
}

export function SwitchButtonStep({ title, className }: ISpecificSwitchButtonProps) {
    return <SwitchButton 
        mode={Mode.STEP}
        targetPageTitle={ title ?? "STEP"}
        className={className}
    />;
}

interface ISwitchButtonTcmProps {
    title?: string;
    className?: string;
}
export function SwitchButtonTcm({ title, className }: ISwitchButtonTcmProps) {
    return <SwitchButton 
        mode={Mode.TCM}
        targetPageTitle={ title ?? "TCM"}
        className={className}
    />;
}

export function SwitchButtonConditional({ currentMode }: { currentMode: Mode }) {
    if (currentMode === Mode.STEP) {
        return <SwitchButtonTcm />;
    } else if (currentMode === Mode.TCM) {
        return <SwitchButtonStep />;
    } else {
        return null;
    }
}