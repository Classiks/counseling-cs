interface ITabButtonProps {
    isSelected: boolean,
    onClick: () => void
}
export default function TabButton({ isSelected, onClick }: ITabButtonProps) {
    const highlighted: string = isSelected ? "opacity-100" : "opacity-50";
    const largerClickable: string = "border-0 border-y-8 border-solid border-transparent bg-clip-padding";
    const transition: string = "transition-opacity duration-[400ms]";
    const sizing: string = "m-1 box-content h-1 w-6";

    return <button
        className={`${sizing} ${transition} ${highlighted} ${largerClickable} bg-white cursor-pointer`}
        onClick={onClick}
    />;
}