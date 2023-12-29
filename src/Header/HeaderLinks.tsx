import { ReactNode, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Mode from "../components/Mode";

import routes from "../Routing/Routes";

import ModeController from "../ModeController";

interface IHeaderLinksProps {
    className?: string
}
export default function HeaderLinks({ className }: IHeaderLinksProps) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    className = "flex flex-row " + className;

    return <div className={className}>{
        routes.get(mode)?.map(route => <HeaderItem 
            key={`$header-item-${route.path}`}
            mode={mode}
            icon={route.icon} 
            target={route.path}
        >
            {route.title}
        </HeaderItem>)
    }</div>
}

interface IHeaderItemProps {
    icon: ReactNode;
    target: string;
    children: ReactNode;
    mode: Mode;
}
function HeaderItem({ icon, children, target, mode }: IHeaderItemProps) {


    return <Link to={target}>
        <div className={`flex flex-row-items-center justify-start hover:bg-${mode}-tertiary hover:cursor-pointer select-none py-1 px-2 rounded-lg`}>
            <div className="mr-2">{icon}</div>
            {children}
        </div>
    </Link>
}