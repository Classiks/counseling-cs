import Slideshow, { ISlideshowProps } from "../Slideshow/Slideshow";

const twContentBubbleStyle = "bg-step bg-opacity-70 rounded-[50%] p-10 lg:w-[45%] w-4/5 h-60 my-5 text-md";
interface IContentBubbleProps {
    className?: string
    children: React.ReactNode,
}
export function ContentBubble({ className, children }: IContentBubbleProps) {
    className = twContentBubbleStyle + " " + className;
    return <div className={className}>
        <div className="text-center">
            {children}
        </div>
    </div>

}

interface IContentBubbleSlideshowProps extends ISlideshowProps  {
    className?: string
}
export function ContentBubbleSlideshow({ className, contents, interval }: IContentBubbleSlideshowProps) {
    className = twContentBubbleStyle + " " + className;
    return <Slideshow
        className="bg-step bg-opacity-70 rounded-[50%] p-12 lg:w-[45%] w-4/5 h-60 my-5 text-md"
        contents={contents}
        interval={interval}
    />
}