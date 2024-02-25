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
        className={"py-2 md:py-3 px-3 md:px-5 my-1 md:my-2 mx-3 md:mx-5 border-gray-200 rounded-lg cursor-pointer " + bgColor}
        onClick={() => {
            ModeController.setMode(mode);
            
            const page: string = UrlParser.getPageFromUrl(location);
            const path: string = `/${mode}/${page}`;
            const pathExists: boolean = routes.get(mode)?.some(route => route.path === path) ?? false;


            navigate(pathExists ? path : `/${mode}`);
        }}
    >
        {targetPageTitle}
    </button>;
}

export function SwitchButtonStep({ title }: { title?: string }) {
    return <SwitchButton 
        mode={Mode.STEP}
        targetPageTitle={ title ?? "STEP"}
        bgColor="bg-step hover:bg-step-600 active:bg-step-700 text-step-text transition-color duration-300"
    />;
}

export function SwitchButtonTcm({ title }: { title?: string }) {
    return <SwitchButton 
        mode={Mode.TCM}
        targetPageTitle={ title ?? "TCM"}
        bgColor="bg-tcm hover:bg-tcm-600 active:bg-tcm-700 text-tcm-text transition-color duration-300"
    />;
}