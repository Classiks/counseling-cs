import { Helmet } from 'react-helmet';
import BlendingInDiv from '../components/BlendingInDiv';
import ColdSeason from '../assets/images/tcm-cold-season.webp';
import HoneyCake from '../assets/images/tcm-honey-cake.webp';
import HealthyKnees from '../assets/images/tcm-healthy-knees.webp';
import SingleSessionCourseCard from './SingleSessionCourseCard';
import PastCourses from './PastCourses';
import PastTcmCourses from './PastTcmCourses';

export default function CoursesTcm() {
    return <BlendingInDiv className="flex flex-col gap-x-16">
        <Helmet>
            <title>TCM Kurse - Traditionelle Chinesische Medizin</title>
            <meta name="description" content="Aktuelle Kurse mit Dr. med. Cordelia Schulz an der VHS Offenburg: Erkältungszeit, gesunde Knie und weihnachtlicher Honigkuchen nach den fünf Elementen." />
        </Helmet>

        <div className="flex w-full justify-center py-7">
            <h1 className="text-2xl font-bold italic">Kurse</h1>
        </div>

        <SingleSessionCourseCard
            title="Natürlich gesund durch die Erkältungszeit"
            courseNumber="262105120"
            signupUrl="https://www.vhs-offenburg.de/kurssuche/kurs/Natuerlich-gesund-durch-die-Erkaeltungszeit/262105120"
            date="Dienstag, 24.11.2026, 18:00 - 19:30 Uhr"
            room="101 Seminarraum"
            fee="13,00 €"
            image={ColdSeason}
            imageAlt="Kräutertee mit Thymian und Salbei auf einem Holztisch"
        >
            <p>
                In diesem Kurs erfahren Sie, wie Sie sich und Ihre Familie mit Anwendungen aus der Naturheilkunde und der Chinesischen Medizin durch die Erkältungszeit begleiten können.
            </p>
            <p>
                Sie lernen Anwendungen zur Vorbeugung und Linderung kennen: Kräuter, Tees und ätherische Öle sowie Akupressurpunkte, Wickel- und Massagetechniken. Dr. med. Cordelia Schulz verbindet Ansätze aus beiden Medizinsystemen und zeigt, was sich im Alltag leicht umsetzen lässt.
            </p>
            <p>
                Für alle, die ihre Selbstfürsorge stärken und ein gut anwendbares Repertoire für die Erkältungszeit aufbauen möchten.
            </p>
            <p className="text-sm opacity-80">
                Hinweis der VHS: Die traditionelle chinesische Medizin ist eine Methode ohne wissenschaftlichen Nachweis und als Ergänzung der Schulmedizin zu verstehen.
            </p>
        </SingleSessionCourseCard>

        <SingleSessionCourseCard
            title="Gemeinsam backen: Weihnachtlicher Honigkuchen nach den fünf Elementen"
            courseNumber="262305603"
            signupUrl="https://www.vhs-offenburg.de/kurssuche/kurs/Gemeinsam-backen-Weihnachtlicher-Honigkuchen-nach-den-fuenf-Elementen/262305603"
            date="Mittwoch, 02.12.2026, 17:00 - 19:00 Uhr"
            room="201 Kochstudio"
            fee="19,00 €"
            image={HoneyCake}
            imageAlt="Weihnachtlicher Honigkuchen mit Walnüssen, Honig und Gewürzen"
            notes={<>
                <p className="font-semibold">Zusätzliche Lebensmittelkosten: 8 bis 12 €</p>
                <p>Zutaten sind unter anderem Vollkorn-Dinkelmehl, Rosinen, Walnüsse, Zitronat und Orangeat.</p>
            </>}
        >
            <p>
                Gemeinsam backen wir einen weihnachtlichen Honigkuchen und lernen dabei die fünf Elemente oder Wandlungsphasen der Chinesischen Ernährungslehre kennen: Holz, Feuer, Erde, Metall und Wasser. Anhand dieser Phasen werden die Zutaten abgestimmt. Honig steht dabei besonders im Mittelpunkt.
            </p>
            <p>
                Während der Backzeit erfahren Sie mehr über die Verbindung der fünf Elemente zu Geschmack, thermischem Verhalten und Farbe. Gewürze und Zutaten werden den Elementen zugeordnet; Sinnesübungen laden dazu ein, Geruch und Geschmack bewusst wahrzunehmen.
            </p>
            <p>
                Der Kurs verbindet praktische Anleitung, Gruppenarbeit, Verkostung, Theorie und Austausch. Für alle, die Freude am Backen haben und die Weihnachtsbäckerei mit dem Konzept der fünf Elemente verbinden möchten.
            </p>
        </SingleSessionCourseCard>

        <SingleSessionCourseCard
            title="Gesunde Knie: beweglich bleiben"
            courseNumber="262105121"
            signupUrl="https://www.vhs-offenburg.de/kurssuche/kurs/gesunde-Knie-beweglich-bleiben/262105121"
            date="Dienstag, 08.12.2026, 18:00 - 19:30 Uhr"
            room="101 Seminarraum"
            fee="13,00 €"
            image={HealthyKnees}
            imageAlt="Sanfte Übung zur Kniestreckung im Sitzen"
        >
            <p>
                Das Knie zählt zu den am stärksten belasteten Gelenken des Körpers. In diesem Kurs erfahren Sie, wie das Knie funktioniert, wie Beschwerden entstehen und was Sie vorbeugend für Ihre Kniegesundheit tun können.
            </p>
            <p>
                Vorgestellt werden praktische Übungen sowie Ansätze aus der Naturheilkunde und der Traditionellen Chinesischen Medizin, die Beweglichkeit und Stabilität fördern und bei Beschwerden unterstützen können. Die Übungen und Tipps lassen sich einfach in den Alltag integrieren.
            </p>
            <p>
                Für alle, die ihre Knie langfristig gesund und beweglich erhalten möchten.
            </p>
            <p className="text-sm opacity-80">
                Hinweis der VHS: Die traditionelle chinesische Medizin ist eine Methode ohne wissenschaftlichen Nachweis und als Ergänzung der Schulmedizin zu verstehen.
            </p>
        </SingleSessionCourseCard>
        <PastCourses>
            <PastTcmCourses />
        </PastCourses>
    </BlendingInDiv>;
}
