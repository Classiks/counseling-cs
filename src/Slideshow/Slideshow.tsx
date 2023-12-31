import { useState, useEffect, useCallback } from 'react';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import BackgroundImageDiv from './BackgroundImageDiv';
import NavigationButton from './NavigationButton';
import TabButton from './TabButton';

interface ISlideshowProps {
    className?: string,
    images: string[]
    interval?: number
}
export default function Slideshow({ images, className, interval }: ISlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = useCallback(
        () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
        [images.length]
    );

    const handleNext = useCallback(
        () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
        [images.length]
    );

    useEffect(() => {
        let imageChangeInterval: NodeJS.Timeout;
        if (interval) {
            imageChangeInterval = setInterval(handleNext, interval);
        }

        return () => clearInterval(imageChangeInterval);
    }, [images.length, interval, handleNext]);


    className = "relative " + className;

    return <BackgroundImageDiv className={className} image={images[currentSlide]}>
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
    </BackgroundImageDiv> ;
}
