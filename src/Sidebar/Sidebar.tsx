import { ReactNode, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Mode from "../components/Mode";

import routes from "../Routing/Routes";

import ModeController from "../ModeController";

export default function Sidebar() {
    const [ mode, setMode ] = useState(ModeController.getMode());
    useEffect(() => {
        ModeController.subscribe(setMode);
    }, []);

    return <div className="top-0 left-0 w-60 m-0 flex flex-col border-r-2 p-5 text-xl">{
        routes.get(mode)?.map(route => <SidebarItem 
            key={`$sidebar-item-${route.path}`}
            mode={mode}
            icon={route.icon} 
            target={route.path}
        >
            {route.title}
        </SidebarItem>)
    }</div>
}

interface ISidebarItemProps {
    icon: ReactNode;
    target: string;
    children: ReactNode;
    mode: Mode;
}
function SidebarItem({ icon, children, target, mode }: ISidebarItemProps) {
    const color: string = getModeColor(mode);

    return <Link to={target}>
        <div className="flex flex-row-items-center justify-start hover:bg-gray-200 hover:cursor-pointer select-none py-1">
            <div className={"mr-2 " + color}> {icon} </div>
            {children}
        </div>
    </Link>
}

function getModeColor(mode: Mode): string {
    switch (mode) {
        case Mode.STEP:
            return "text-step";
        case Mode.TCM:
            return "text-tcm";
        default:
            return "";
    }
}