import { useState, useEffect, ReactNode } from 'react';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

interface ISlideshowProps {
    className?: string,
    images: string[]
    interval?: number
}
export default function Slideshow({ images, className, interval }: ISlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        let imageChangeInterval: NodeJS.Timeout;
        if (interval) {
            imageChangeInterval = setInterval(handleNext, interval);
        }

        return () => clearInterval(imageChangeInterval);
    }, [images.length, interval]);


    className = "relative " + className;

    return <BackgroundDiv className={className} image={images[currentSlide]}>
        <div className="absolute bottom-0 left-0 right-0 mb-4 flex justify-center">
            {images.map((_, index) => <TabButton
                key={`tab-button-${index}`}
                isSelected={currentSlide === index}
                onClick={() => setCurrentSlide(index)}
            />)}
        </div>

        <NavigationButton 
            className="justify-start left-0" 
            onClick={handlePrev}
        >
            <NavigateBefore />
        </NavigationButton>
        <NavigationButton
            className="justify-end right-0" 
            onClick={handleNext}
        >
            <NavigateNext />
        </NavigationButton>
    </BackgroundDiv> ;
}

interface INavigationButtonProps {
    className?: string,
    onClick: () => void,
    children: ReactNode
}
function NavigationButton({ className, onClick, children }: INavigationButtonProps) {
    className = "absolute bottom-0 top-0 flex w-[10%] items-center px-1 " + className;
    return <div className={className}>
        <div className="p-1 bg-white bg-opacity-40 rounded-full">
            <button onClick={onClick} >
                {children}
            </button>
        </div>
    </div>
}

interface IBackgroundImageProps {
    className?: string,
    image: string,
    children: ReactNode,
} 
function BackgroundDiv({ className, image, children }: IBackgroundImageProps) {
    className = "relative " + className;

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

interface ITabButtonProps {
    isSelected: boolean,
    onClick: () => void
}
function TabButton({ isSelected, onClick }: ITabButtonProps) {
    const highlighted: string = isSelected ? "opacity-100" : "opacity-50";
    const largerClickable: string = "border-0 border-y-8 border-solid border-transparent bg-clip-padding";
    const transition: string = "transition-opacity duration-[400ms]";
    const sizing: string = "m-1 box-content h-1 w-6";

    return <button
        className={`${sizing} ${transition} ${highlighted} ${largerClickable} bg-white cursor-pointer`}
        onClick={onClick}
    />;
}