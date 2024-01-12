
import { ReactNode, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Mode from "../components/Mode";

import routes from "../Routing/Routes";

import ModeController from "../ModeController";

interface IFooterLinksProps {
    className?: string
}
export default function FooterLinks({ className }: IFooterLinksProps) {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    className = "flex flex-row " + className;

    return <div className={className}>{
        routes.get(mode)?.map(route => <FooterItem 
            key={`$header-item-${route.path}`}
            mode={mode}
            icon={route.icon} 
            target={route.path}
        />)
    }</div>
}

interface IFooterItemProps {
    icon: ReactNode;
    target: string;
    mode: Mode;
}
function FooterItem({ icon, target, mode }: IFooterItemProps) {
    return <Link to={target}>
        <div className={`flex flex-row-items-center justify-start hover:bg-${mode}-tertiary hover:cursor-pointer select-none py-1 px-2 rounded-lg`}>
            <div className="mx-3 scale-150">{icon}</div>
        </div>
    </Link>
}