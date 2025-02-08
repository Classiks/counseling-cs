import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SpecialAustralia() {
    const navigate = useNavigate();

    const images = [
        "https://www.vhs-offenburg.de/fileadmin/kuferweb/webbasys/bilder/kurs/K_8461_1.jpg",
        "https://www.vhs-offenburg.de/fileadmin/kuferweb/webbasys/bilder/kurs/K_8461_2.jpg",
        "https://www.vhs-offenburg.de/fileadmin/kuferweb/webbasys/bilder/kurs/K_8461_3.jpg",
        "https://www.vhs-offenburg.de/fileadmin/kuferweb/webbasys/bilder/kurs/K_8461_4.jpg",
    ]

    return <div className="h-screen p-5 md:p-10 flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-3">
            <h1 className="text-2xl font-bold">Auf berühmten Pfaden und abgelegenen Wanderwegen in Australiens Südosten unterwegs</h1>
            <Button onClick={() => navigate("/")} className="w-fit">
                Zurück zur Startseite
            </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between h-4/5">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Kursnummer:</span>
                    <span>251109001</span>
                    
                    <span className="font-semibold">Beginn:</span>
                    <span>Do., 27.03.2025, 19:00 - 20:30 Uhr</span>
                    
                    <span className="font-semibold">Kursentgelt:</span>
                    <span>5,00 € (Abendkasse)</span>
                    
                    <span className="font-semibold">Dauer:</span>
                    <span>1 Termin</span>
                    
                    <span className="font-semibold">Kursleitung:</span>
                    <span>Dr. med. Cordelia Schulz</span>
                </div>
                
                <div className="mt-4">
                    <span className="font-semibold">Kursort:</span>
                    <div className="mt-1">
                        <p>Offenburg VHS 102 Saal</p>
                        <p>Amand-Goegg-Straße 2 - 4, 77654 Offenburg</p>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-col gap-5 overflow-x-auto md:overflow-y-auto w-fit">
                {images.map((image) => (
                    <img key={image} src={image} alt="Australia" className="w-40 md:w-80 h-40 md:h-80 object-cover" />
                ))}
            </div>
        </div>
    </div>
}

export function LinkToAustraliaSpecial({ className }: { className?: string }) {
    return <Link to="/specials/australia" className={className}>
        <Button className="w-fit py-10 px-10 bg-gradient-to-r from-black to-black/80 hover:bg-black/80 text-white border-2 border-white">
            Spezialvortrag: <br />Auf berühmten Pfaden in Australiens
        </Button>
    </Link>
}