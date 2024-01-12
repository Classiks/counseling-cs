// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";

// import L from 'leaflet';

import { LocationOn, CalendarMonth } from '@mui/icons-material';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { ReactNode } from 'react';
import BlendingInDiv from '../components/BlendingInDiv';
// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// (L.Control.prototype as any)._refocusOnMap = function () {};

export default function Courses() {
    const dates: IDateProps[] = [
        {
            date: "Montag, 18. Oktober 2021",
            time: "9:00 - 12:00 Uhr",
            location: VHS_Offenburg,
            title: "Kostenlose Erstberatung"
        },
        {
            date: "Montag, 25. Oktober 2021",
            time: "9:00 - 12:00 Uhr",
            location: VHS_Freiburg,
            title: "Kostenlose Erstberatung"
        },
        {
            date: "Montag, 1. November 2021",
            time: "9:00 - 12:00 Uhr",
            location: VHS_Offenburg, 
            title: "Kostenlose Erstberatung"
        },
        {
            date: "Montag, 8. November 2021",
            time: "9:00 - 12:00 Uhr",
            location: VHS_Freiburg,
            title: "Kostenlose Erstberatung"
        },
    ];

    return <BlendingInDiv className="p-5">
        <h1 className="text-3xl mb-2">
            Termine
        </h1>
        <p className="mb-2">
            Termine können Sie auch telefonisch unter <a href="tel:+497811234567">0781 1234567</a> oder per Email an <a href="mailto:danielschulz1906@gmail.com">danielschulz1906@gmail.com</a> vereinbaren.
        </p>
        <hr />
        {
            dates.map((date, i) => <Date key={i} {...date} />)
        }
    </BlendingInDiv>
}



interface IDateProps {
    title: string,
    date: string,
    time: string,
    location: ILocation
}
function Date({ date, time, location, title }: IDateProps) {
    return <div className="my-10">
        <p className="text-3xl">{title}</p>
        <div className="flex flex-row">
            <CalendarMonth />
            <p>{`${date}, ${time}`}</p>
        </div>
        <div className="flex flex-row">
            <LocationOn />
            <p>{location.name}</p>
        </div>
        {/*
        <MapContainer 
            key={title}  
            center={[location.lat, location.lng]} 
            zoom={15} 
            scrollWheelZoom={false}
            className="mt-3"
            style={{
                height: 300,
                width: 500
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]}>
                <Popup >
                    {location.name}
                </Popup>
            </Marker>
        </MapContainer>
        */}
        <hr />
        <Button>Anmelden</Button>
    </div>
}

interface ILocation {
    name: string,
    lat: number,
    lng: number
}

const VHS_Offenburg: ILocation = {
    name: "VHS Offenburg",
    lat: 48.468920,
    lng: 7.956870
}

const VHS_Freiburg: ILocation = {
    name: "VHS Freiburg",
    lat: 47.9963,
    lng: 7.8469
}

function Button({ children }: { children: ReactNode }) {
    return <button 
        className= " bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded my-2"
        onClick={() => {
            alert("Happy Birthday!");
            // window.open("https://www.youtube.com/watch?v=eBGIQ7ZuuiU", "_blank");  // Rick Roll
        }}
    >
        {children}
    </button>
}
