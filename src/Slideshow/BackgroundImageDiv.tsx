import { ReactNode } from "react";

interface IBackgroundImageProps {
    className?: string,
    image?: string,
    children: ReactNode,
} 
export default function BackgroundImageDiv({ className, image, children }: IBackgroundImageProps) {
    className = "relative " + className;

    if (!image) {
        return <div className={className}>
            { children }
        </div>
    }

    return <div 
        className={className}
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
        { children }
    </div>
}