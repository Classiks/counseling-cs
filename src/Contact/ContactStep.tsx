import BlendingInDiv from "../components/BlendingInDiv";
import { Phone, Mail, LocationOn, Public } from "@mui/icons-material";
import { Helmet } from "react-helmet";


export default function ContactDefault() {
    return <BlendingInDiv className="p-5">
        <Helmet>
            <title>Kontakt - STEP-Programm</title>
            <meta name="description" content="Kontaktieren Sie uns für weitere Informationen zum STEP-Programm, zur Anmeldung für Kurse oder bei Fragen zur Elternbildung und Familienförderung." />
        </Helmet>
        <h1 className="text-3xl mb-2">
            Kontakt
        </h1>

        <div className="mb-16">
            <p className="mb-4 mt-6 text-lg">
                Sie können mich gerne per Email kontaktieren.
            </p>

            <div className="ml-2">
                <Mail className="inline mr-2" />
                <a href="mailto:cordelia.schulz@instep-online.de">cordelia.schulz@instep-online.de</a>
            </div>
        </div>

        <div>
            <p className="mt-6 text-lg mb-4">
                Meine Kurse finden aktuell an der VHS Offenburg statt.
            </p>

            <div className="space-y-1 ml-2">
                <div>
                    <LocationOn className="inline mr-2" />
                    <a href="https://www.google.com/maps/search/?api=1&query=Volkshochschule Offenburg e. V." target="_blank" rel="noopener noreferrer">Weingartenstr. 34 b | 77654 Offenburg</a>
                </div>
                <div>
                    <Phone className="inline mr-2" />
                    {/* // 07819364200 */}
                    <a href="tel:+497819364200">0781 9364200</a>
                </div>
                <div>
                    <Mail className="inline mr-2" />
                    <a href="mailto:anmeldung@vhs-offenburg.de">anmeldung@vhs-offenburg.de</a>
                </div>
                <div>
                    <Public className="inline mr-2" />
                    <a href="https://www.vhs-offenburg.de/" target="_blank" rel="noopener noreferrer">www.vhs-offenburg.de</a>
                </div>
            </div>
        </div>

    </BlendingInDiv>
}


