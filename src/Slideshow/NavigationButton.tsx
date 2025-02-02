import { ReactNode } from "react";

interface INavigationButtonProps {
    className?: string,
    onClick: () => void,
    children: ReactNode
}
export default function NavigationButton({ className, onClick, children }: INavigationButtonProps) {
    className = "absolute bottom-0 top-0 flex w-[10%] items-center px-1 " + className;
    return <div className={className}>
        <div className="p-1 bg-muted text-muted-foreground bg-opacity-40 rounded-full">
            <button onClick={onClick} >
                {children}
            </button>
        </div>
    </div>
}