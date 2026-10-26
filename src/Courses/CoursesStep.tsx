import { Helmet } from 'react-helmet';
import BlendingInDiv from '../components/BlendingInDiv';
import StepEncouragementScientist from '../assets/images/cartoon-encouragement-scientist.png';
import SingleSessionCourseCard from './SingleSessionCourseCard';
import PastCourses from './PastCourses';
import PastStepCourses from './PastStepCourses';

export default function CoursesStep() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>STEP Kurse - Termine und Informationen</title>
            <meta name="description" content="Herausforderndes Verhalten bei Kindern verstehen: Praxisnaher Kurs mit dem STEP-Programm und Dr. med. Cordelia Schulz am 5. Dezember 2026 an der VHS Offenburg." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">STEP Kurse</h1>
        </div>

        <SingleSessionCourseCard
            title="Herausforderndes Verhalten bei Kindern – wie kann ich damit umgehen?"
            courseNumber="262105122"
            signupUrl="https://www.vhs-offenburg.de/kurse/familie-werden-familie-sein/kurs/Herausforderndes-Verhalten-bei-Kindern-wie-kann-ich-damit-umgehen/262105122"
            date="Samstag, 05.12.2026, 10:00 - 12:00 Uhr"
            room="303 Seminarraum"
            fee="13,00 €"
            image={StepEncouragementScientist}
            imageAlt="Cartoon: Ein Erwachsener ermutigt ein Kind nach einem missglückten Experiment"
        >
            <p>
                In diesem Kurs erfahren Erziehende, wie sogenanntes Fehlverhalten bei Kindern entsteht, welche positiven Seiten dahinter verborgen sind und wie man ein kooperatives Miteinander stärkt.
            </p>
            <p>
                Aufbauend auf dem STEP-Programm lernen Sie, das Verhalten des Kindes besser zu verstehen, Ressourcen zu entdecken und Strategien für gelingende Kommunikation, Grenzen und Konfliktlösung anzuwenden.
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Ursachen und Potenziale kindlichen Verhaltens erkennen</li>
                <li>Die Perspektive wechseln und das Kind verstehen, statt es zu verurteilen</li>
                <li>Emotions- und Selbststeuerung auf beiden Seiten fördern</li>
                <li>Klar kommunizieren, zuhören und Rückmeldungen austauschen</li>
                <li>Konflikte lösen und Zusammenarbeit statt Eskalation ermöglichen</li>
            </ul>
            <p>
                Kurze Inputs, Demonstrationen, Rollenspiele und Austausch in der Gruppe machen die Inhalte für den Alltag nutzbar. Der Kurs arbeitet mit Konzepten des STEP-Programms zur Selbstführung, Emotionsregulation, zum Perspektivwechsel und zur Ressourcenorientierung.
            </p>
            <p>
                Für Eltern, Erziehungsberechtigte und alle, die das Zusammenleben mit Kindern respektvoller und kooperativer gestalten möchten.
            </p>
        </SingleSessionCourseCard>
        <PastCourses>
            <PastStepCourses />
        </PastCourses>
    </BlendingInDiv>;
}
