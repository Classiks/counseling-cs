import { ReactNode } from 'react';
import Accordeon from '../components/Accordeon';
import { Card, CardContent } from '@/components/ui/card';
import SignupButton from './SignupButton';
import VhsLocation from './VhsLocation';

interface SingleSessionCourseCardProps {
    title: string;
    courseNumber: string;
    signupUrl: string;
    date: string;
    room: string;
    fee: string;
    image: string;
    imageAlt: string;
    notes?: ReactNode;
    children: ReactNode;
}

export default function SingleSessionCourseCard({
    title, courseNumber, signupUrl, date, room, fee, image, imageAlt, notes, children,
}: SingleSessionCourseCardProps) {
    return <Card className="m-3">
        <CardContent className="p-4 flex gap-x-10 items-start justify-between">
            <div className="min-w-0 flex-1 space-y-5">
                <div className="p-2 pb-0">
                    <h2 className="text-2xl font-bold italic">{title}</h2>
                    <p>VHS-Kursnummer: {courseNumber}</p>
                </div>
                <SignupButton link={signupUrl} />
                <div>
                    <p>Termin: {date}</p>
                    <p>Dauer: 1 Termin</p>
                    <p>Kursgebühr: {fee}</p>
                    <VhsLocation room={room} />
                </div>
                {notes && <div className="space-y-2">{notes}</div>}
                <Accordeon
                    heading="Inhalte"
                    className="bg-primary p-2"
                    headingClassName="font-bold text-lg"
                >
                    <div className="space-y-3 pt-2">{children}</div>
                </Accordeon>
            </div>
            <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="hidden md:block w-72 max-w-[35%] shrink-0 object-contain rounded-md bg-white"
            />
        </CardContent>
    </Card>;
}
