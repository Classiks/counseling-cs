import { useState, useEffect, useCallback, ReactNode } from 'react';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import BackgroundImageDiv from './BackgroundImageDiv';
import NavigationButton from './NavigationButton';
import TabButton from './TabButton';

import Interval from '../components/Interval';
import { twMerge } from 'tailwind-merge';

export interface ISlideshowProps {
    className?: string,
    contents: Content[]
    delay?: number
}
export default function Slideshow({ contents, className, delay }: ISlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const changeSlide = useCallback((change: number) => {
        setCurrentSlide((prev) => Math.abs((prev + change) % contents.length));
    }, [contents.length]);

    const [ interval ] = useState<Interval|null>(delay !== undefined ? new Interval(() => changeSlide(1), delay) : null);

    const handlePrev = () => {
        interval?.reset(); 
        changeSlide(-1);
    }

    const handleNext = () => {
        interval?.reset(); 
        changeSlide(1);
    }

    useEffect(() => {
        interval?.start();
        return () => interval?.stop();
    }, []);


    const _className: string = twMerge("relative " + className);

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
