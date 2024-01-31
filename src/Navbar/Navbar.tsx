import { ReactNode, useEffect, useState } from "react";

import Logo from "../assets/images/Logo_CS_1.png";

import UrlParser from '../components/UrlParser';

import ModeController from "../ModeController";
import Mode from "../components/Mode";

import { Link, useLocation, useNavigate } from "react-router-dom";

import routes from "../Routing/Routes";

import { SwitchButtonStep, SwitchButtonTcm } from "../components/SwitchButton";


interface INavbar {
    className?: string,
}

export default function Navbar({ className }: INavbar) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    const navigate = useNavigate();

    return <div className={`w-screen fixed bottom-0 md:top-0 z-10 flex items-center shadow-lg border-t md:border-b md:border-t-0 border-white justify-between bg-gradient-to-l ${getBackgroundGradient(mode)} ` + className}>
        <div className="flex gap-4 items-center ml-4">
            <img 
                src={Logo} alt="logo" 
                className="h-12 cursor-pointer hover:scale-105 active:scale-110 transition-transform duration-500"
                onClick={() => {
                    navigate("/");
                }}
            />
            <p className="text-3xl font-bold hidden 2xl:block">Dr. med. Cordelia Schulz</p>
        </div>
        <div className="flex items-center">
            <HeaderLinks />
            <ModeSwitchButton mode={mode} />
        </div>
    </div>
}

function getBackgroundGradient(mode: Mode): string {
    switch (mode) {
        case Mode.STEP:
            return "from-step-400 to-step-500";
        case Mode.TCM:
            return "from-tcm-400 to-tcm-500";
        default:
            return "";
    }
}

interface IModeSwitchButton {
    mode: Mode,
}
function ModeSwitchButton({ mode }: IModeSwitchButton) {
    switch (mode) {
        case Mode.STEP:
            return <SwitchButtonTcm />
        case Mode.TCM:
            return <SwitchButtonStep />
        default:
            return <div />
    }
}


interface IHeaderLinksProps {
    className?: string
}
function HeaderLinks({ className }: IHeaderLinksProps) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    className = "flex " + className;

    return <nav className={className}>{
        routes.get(mode)?.map(route => <HeaderItem 
            key={`$header-item-${route.path}`}
            mode={mode}
            icon={route.icon} 
            target={route.path}
        >
            {route.title}
        </HeaderItem>)
    }</nav>
}

interface IHeaderItemProps {
    className?: string
    icon: ReactNode;
    target: string;
    children: ReactNode;
    mode: Mode;
}
function HeaderItem({ icon, children, target, mode, className }: IHeaderItemProps) {
    const location = useLocation();
    const currentPath: string = UrlParser.getPathFromUrl(location);

    const isActive: boolean = currentPath === target;
    className = "flex gap-2 hover:text-white rounded-lg items-center hover:cursor-pointer select-none py-1 px-2 ronded-lg transition-color duration-700 " + className;
    className += generateHoverAndActiveClasses(mode, isActive);


    return <Link to={target}>
        <div className={className}>
            <div>{icon}</div>
            <div className="hidden lg:block">
                {children}
            </div>
        </div>
    </Link>
}

function generateHoverAndActiveClasses(mode: Mode, isActive: boolean): string {
    if (mode === Mode.STEP) {
        return " hover:bg-step-600 " + (isActive ? "bg-step-200" : "");
    }

    if (mode === Mode.TCM) {
        return " hover:bg-tcm-600 " + (isActive ? "bg-tcm-200" : "");
    }

    return "";
}