import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IBlendingInDivProps {
    className?: string,
    children: ReactNode
}
export default function BlendingInDiv({ className, children }: IBlendingInDivProps) {
    return <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.5 }}
        className={className}
    >
        {children}
    </motion.div>
}