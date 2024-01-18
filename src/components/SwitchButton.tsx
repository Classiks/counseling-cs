import { useLocation, useNavigate } from "react-router-dom";

import Mode from "../components/Mode";
import ModeController from "../ModeController";
import UrlParser from "./UrlParser";
import routes from "../Routing/Routes";

interface ISwitchButtonProps {
    mode: Mode
    targetPageTitle: string,
    bgColor: string,
}

export default function SwitchButton({ mode, targetPageTitle, bgColor }: ISwitchButtonProps) {
    const navigate = useNavigate();
    const location = useLocation()

    return <button 
        className={"py-3 px-5 my-2 mx-5 border-gray-200 rounded-lg cursor-pointer " + bgColor}
        onClick={() => {
            ModeController.setMode(mode);
            
            const page: string = UrlParser.getPageFromUrl(location);
            const path: string = `/${mode}/${page}`;
            const pathExists: boolean = routes.get(mode)?.some(route => route.path === path) ?? false;


            navigate(pathExists ? path : `/${mode}`);
        }}
    >
        {`Zu ${targetPageTitle}`}
    </button>;
}

export function SwitchButtonStep() {
    return <SwitchButton 
        mode={Mode.STEP}
        targetPageTitle="STEP"
        bgColor="bg-step hover:bg-step-tertiary text-step-text"
    />;
}

export function SwitchButtonTcm() {
    return <SwitchButton 
        mode={Mode.TCM}
        targetPageTitle="TCM"
        bgColor="bg-tcm hover:bg-tcm-tertiary text-tcm-text"
    />;
}