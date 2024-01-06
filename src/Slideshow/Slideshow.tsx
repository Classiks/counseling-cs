import { useState, useEffect, useCallback, ReactNode } from 'react';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import BackgroundImageDiv from './BackgroundImageDiv';
import NavigationButton from './NavigationButton';
import TabButton from './TabButton';

export interface ISlideshowProps {
    className?: string,
    contents: Content[]
    interval?: number
}
export default function Slideshow({ contents, className, interval }: ISlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = useCallback(
        () => setCurrentSlide((prev) => (prev === 0 ? contents.length - 1 : prev - 1)),
        [contents.length]
    );

    const handleNext = useCallback(
        () => setCurrentSlide((prev) => (prev === contents.length - 1 ? 0 : prev + 1)),
        [contents.length]
    );

    useEffect(() => {
        let imageChangeInterval: NodeJS.Timeout;
        if (interval) {
            imageChangeInterval = setInterval(handleNext, interval);
        }

        return () => clearInterval(imageChangeInterval);
    }, [contents.length, interval, handleNext]);


    className = "relative " + className;

    return <BackgroundImageDiv className={className} image={contents[currentSlide].image}>
        <div className="px-2">{
            contents[currentSlide].content
        }</div>

        <div className="absolute bottom-0 left-0 right-0 mb-4 flex justify-center">
            {contents.map((_, index) => <TabButton
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
    </BackgroundImageDiv> ;
}

export interface Content {
    image?: string;
    content?: ReactNode
}
