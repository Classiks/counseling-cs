import Slideshow, { ISlideshowProps } from "../Slideshow/Slideshow";
interface IContentBubbleProps {
    className?: string
    children: React.ReactNode,
}
export function ContentBubble({ className, children }: IContentBubbleProps) {
    return <div className={className}>
        <div className="text-center">
            {children}
        </div>
    </div>

}

interface IContentBubbleSlideshowProps extends ISlideshowProps  {
    className?: string
}
export function ContentBubbleSlideshow({ className, contents, delay }: IContentBubbleSlideshowProps) {
    return <Slideshow
        className={className}
        contents={contents}
        delay={delay}
    />
}