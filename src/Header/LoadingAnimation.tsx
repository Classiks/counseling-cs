import { motion } from "framer-motion"
import { ReactNode } from "react"

// todo abstraction out
export default function LoadingAnimation({ className, children }: { className?: string, children: ReactNode }) {
    return <motion.div 
        className={"flex flex-row w-full justify-between items-center " + className}
        initial={{ scaleX: 0.7, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
}

