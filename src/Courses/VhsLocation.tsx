import { LocationOn } from "@mui/icons-material";

interface IVhsLocation {
    room: string;
}
export default function VhsLocation({ room }: IVhsLocation) {
    return <div className="flex items-center">
        <a href="https://www.google.com/maps/search/?api=1&query=Amand-Goegg-Straße 2 - 4, 77654 Offenburg" target="_blank" rel="noopener noreferrer">
            <p> VHS Offenburg, {room} Seminarraum </p>
            <p>Amand-Goegg-Straße 2 - 4 | 77654 Offenburg</p>
        </a>
        <LocationOn className="inline ml-2" />
    </div>
}