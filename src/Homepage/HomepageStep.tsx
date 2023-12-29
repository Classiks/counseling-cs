import { ReactNode, useState } from "react"
import Logo from "../assets/images/icon_v1_cropped.png"
import ProfilePicture from "../assets/images/profile-picture.jpg";

import { motion } from "framer-motion";

export default function Homepage() {
    const [ info, setInfo ] = useState<ReactNode>(null);

    const bubbles: IBubbleProps[] = [
        {
            className: "top-0 right-0 text-black bg-gradient-to-r from-green-400 to-green-600",
            xTranslate: 130, yTranslate: -120,
            infoSetter: setInfo,
            content: <div>
                <p className="mb-5">
                    Die traditionelle chinesische Medizin (TCM) ist eine jahrtausendealte Heilkunst, die den ganzen Menschen betrachtet. Als erfahrene Medizinerin in diesem Bereich biete ich individuell abgestimmte Behandlungspläne, die sowohl auf alte Weisheiten als auch auf moderne medizinische Erkenntnisse basieren. Mein Ansatz kombiniert Ernährungsberatung, Kräutermedizin und Akupunktur, um Ihre Gesundheit und Ihr Wohlbefinden auf natürliche Weise zu unterstützen und zu verbessern.  
                </p>
                <img 
                    src="https://images.squarespace-cdn.com/content/v1/58fe78906a4963418dc5c8c4/1523385236116-DQW8L6RHXO1PEV6M9EBT/fiveelements.jpg?format=2500w"
                    alt="" 
                    className="h-80 mx-auto"
                />
            </div>,
            label: "TCM"
        },
        {
            className: "bottom-0 right-0 text-white bg-gradient-to-r from-orange-500 to-orange-700",
            xTranslate: 150, yTranslate: 100,
            infoSetter: setInfo,
            content: <div>
                <p className="mb-5">
                    Entdecken Sie unsere Elternkurse, die speziell darauf ausgerichtet sind, Sie in Ihrer wichtigen Rolle als Elternteil zu unterstützen. Unsere Kurse bieten wertvolle Einblicke in Ernährung, Gesundheit und das Wohlbefinden Ihrer Kinder, kombiniert mit traditionellen chinesischen Weisheiten und modernen Erziehungsstrategien. Als Mutter von vier Kindern und Expertin in traditioneller chinesischer Medizin und Ernährung, teile ich meine Erfahrungen und Kenntnisse, um Ihnen praktische Tipps und liebevolle Unterstützung anzubieten.
                </p>
                <img 
                    src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/85/2023/08/24140936/Pobyt-z-dzieckiem-Sofitel-Grand-Sopot-short-2.jpg"
                    alt=""
                />
            </div>,
            label: "STEP"
        },
        {
            className: "top-0 left-0 text-white bg-gradient-to-r from-blue-400 to-blue-600",
            xTranslate: -240, yTranslate: 100,
            infoSetter: setInfo,
            content: <img src={ProfilePicture} className="w-96 rounded-full" alt="" />,
            label: "Über Mich"  
        }
    ]

    return <div 
        className="flex justify-center items-center w-full h-full overflow-clip select-none">
        <motion.div 
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
        >
            <MainLogo />

            {
                bubbles.map((bubble) => <Bubble {...bubble} key={`Bubble-${bubble.label}`} />)
            }

            {info}
        </motion.div>
    </div>
}

function MainLogo() {
    return <div>
        <img src={Logo} alt="Logo" className="w-full" />
    </div>
}

interface IBubbleProps {
    className: string
    xTranslate: number,
    yTranslate: number,
    infoSetter: (info: ReactNode) => void,
    label: string,
    content: string|ReactNode
}
function Bubble( { label, className, xTranslate, yTranslate, infoSetter, content }: IBubbleProps ) {
    const _className = `
        flex justify-center items-center

        absolute

        w-64 h-64
        rounded-full
        p-11

        transform transition duration-300 hover:scale-110

        shadow-lg

        text-3xl
    ` + className;

    const style = {
        transform: `translate(${xTranslate}px, ${yTranslate}px)`
    };

    return <div 
        className={_className} 
        style={style}
        onMouseEnter={() => infoSetter(<InfoText infoSetter={infoSetter} content={content} />)}
        onMouseLeave={() => infoSetter(null)}
    >
        {label}
    </div>
}

function InfoText(props: { infoSetter: (info: ReactNode) => void, content: string|ReactNode }) {
    const className = "z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[700px] bg-gray-100 bg-opacity-90 rounded-xl text-2xl p-11";

    return <div 
        className={className}
        onMouseEnter={() => props.infoSetter(<InfoText {...props} />)}
        onMouseLeave={() => props.infoSetter(null)}
    >
        {props.content}
    </div>
}



