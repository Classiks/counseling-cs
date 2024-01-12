import BlendingInDiv from "../components/BlendingInDiv";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ContactDefault() {
    return <BlendingInDiv className="p-5">
        <h1 className="text-3xl mb-2">
            Kontakt
        </h1>

        <p className="mb-2 mt-6">
            Sie können mich gerne telefonisch oder per Email kontaktieren.
        </p>

        <motion.ul
            initial="hidden"
            animate="visible"
            variants={childContainer}
        >
            <motion.li className="mb-2" >
                <Phone className="inline mr-2" />
                <a href="tel:+497811234567">0781 1234567</a>
            </motion.li>

            <motion.li className="mb-2" >
                <Mail className="inline mr-2" />
                <a href="mailto:danielschulz1906@gmail.com">danielschulz1906@gmail.com</a>
            </motion.li>

            <motion.li className="mb-2" >
                <p className="mt-6">
                    Meine Kurse finden aktuell an der VHS Offenburg statt.
                </p>
            </motion.li>

            <motion.li className="mb-2" >
                <LocationOn className="inline mr-2" />
                <a href="https://goo.gl/maps/4N2jVw7r8n1Yc2bA9" target="_blank" rel="noopener noreferrer">Schillerstraße 4, 77652 Offenburg</a>
            </motion.li>

        </motion.ul>
    </BlendingInDiv>
}


const childContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
};