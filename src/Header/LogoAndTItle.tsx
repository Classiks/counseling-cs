import Logo from "../assets/images/chat_gpt_logo_cropped.png";

interface ILogoAndTitleProps {
    className?: string
}
export default function LogoAndTitle({ className }: ILogoAndTitleProps) {
    className = "flex flex-row " + className;

    return <div className={className}>
        <img src={Logo} alt="Logo" className="h-10 ml-5" /> 
        <div>
            <span className="text-2xl font-bold ml-10">Dr. med. Cordelia Schulz</span>
        </div>
    </div>
}