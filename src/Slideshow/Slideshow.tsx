import { useState, ReactNode } from 'react';
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

interface ISlideshowProps {
    className?: string,
    images: string[]
}
export default function Slideshow({ images, className }: ISlideshowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    className = "relative " + className;

    return <BackgroundDiv className={className} image={images[currentSlide]}>
        {/* Indicators */}
        <div className="absolute bottom-0 left-0 right-0 mb-4">
            {images.map((_, index) => <TabButton
                index={index}
                isSelected={currentSlide === index}
                onClick={() => setCurrentSlide(index)}
            />)}
        </div>

        {/* Previous and Next */}
        <div
            className="absolute bottom-0 top-0 left-0 flex w-[15%] items-center justify-center"
        >
            <button
                onClick={handlePrev}
            >
                <NavigateBefore />
            </button>
        </div>
        <div
            className="absolute bottom-0 top-0 right-0 flex w-[15%] items-center justify-center"
        >
        <button
            onClick={handleNext}
        >
            <NavigateNext />
        </button>
</div>
    </BackgroundDiv> ;
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
    index: number,
    isSelected: boolean,
    onClick: () => void
}
function TabButton({ isSelected, index, onClick }: ITabButtonProps) {
    const highlighted: string = isSelected ? "opacity-100" : "opacity-50";
    const largerClickable: string = "border-0 border-y-8 border-solid border-transparent bg-clip-padding";
    const transition: string = "transition-opacity duration-[400ms]";
    const sizing: string = "m-1 box-content h-1 w-8";

    return <button
        key={`tab-button-${index}`}
        className={`${sizing} ${transition} ${highlighted} ${largerClickable} bg-white cursor-pointer`}
        onClick={onClick}
    />;
}

// export default function Slideshow() {
//     // <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
//     return <div
//         id="carouselExampleCaptions"
//         className="relative"
//         data-te-carousel-init
//         data-te-ride="carousel">
//         {/* <!--Carousel indicators--> */}
//         <div
//             className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//             data-te-carousel-indicators>
//             <button
//                 type="button"
//                 data-te-target="#carouselExampleCaptions"
//                 data-te-slide-to="0"
//                 data-te-carousel-active
//                 className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//                 aria-current="true"
//                 aria-label="Slide 1"></button>
//             <button
//                 type="button"
//                 data-te-target="#carouselExampleCaptions"
//                 data-te-slide-to="1"
//                 className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//                 aria-label="Slide 2"></button>
//             <button
//                 type="button"
//                 data-te-target="#carouselExampleCaptions"
//                 data-te-slide-to="2"
//                 className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//                 aria-label="Slide 3"></button>
//         </div>

//         {/* <!--Carousel items--> */}
//         <div
//             className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//             {/* <!--First item--> */}
//             <div
//                 className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                 data-te-carousel-active
//                 data-te-carousel-item
//                 style={{ backfaceVisibility: "hidden" }}>
//                 <img
//                     src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
//                     className="block w-full"
//                     alt="..." />
//                 <div
//                     className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//                     <h5 className="text-xl">First slide label</h5>
//                     <p>
//                         Some representative placeholder content for the first slide.
//                     </p>
//                 </div>
//             </div>
//             {/* <!--Second item--> */}
//             <div
//                 className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                 data-te-carousel-item
//                 style={{ backfaceVisibility: "hidden" }}>
//                 <img
//                     src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
//                     className="block w-full"
//                     alt="..." />
//                 <div
//                     className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//                     <h5 className="text-xl">Second slide label</h5>
//                     <p>
//                         Some representative placeholder content for the second slide.
//                     </p>
//                 </div>
//             </div>
//             {/* <!--Third item--> */}
//             <div
//                 className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                 data-te-carousel-item
//                 style={{ backfaceVisibility: "hidden" }}>
//                 <img
//                     src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
//                     className="block w-full"
//                     alt="..." />
//                 <div
//                     className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//                     <h5 className="text-xl">Third slide label</h5>
//                     <p>
//                         Some representative placeholder content for the third slide.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         {/* <!--Carousel controls - prev item--> */}
//         <button
//             className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//             type="button"
//             data-te-target="#carouselExampleCaptions"
//             data-te-slide="prev">
//             <span className="inline-block h-8 w-8">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="h-6 w-6">
//                     <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M15.75 19.5L8.25 12l7.5-7.5" />
//                 </svg>
//             </span>
//             <span
//                 className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//             >Previous</span
//             >
//         </button>
//         {/* <!--Carousel controls - next item--> */}
//         <button
//             className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//             type="button"
//             data-te-target="#carouselExampleCaptions"
//             data-te-slide="next">
//             <span className="inline-block h-8 w-8">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     className="h-6 w-6">
//                     <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                 </svg>
//             </span>
//             <span
//                 className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//             >Next</span
//             >
//         </button>
//     </div>
// }