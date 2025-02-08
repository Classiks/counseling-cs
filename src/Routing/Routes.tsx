import { ReactNode } from "react";

import { Home, Bookmark, DateRange, Email, ContactPage, Info } from "@mui/icons-material";

import HomepageStep from "../Homepage/HomepageStep";
import ConceptStep from "../ConceptExplained/ConceptStep";
import ReadingTipsStep from "../ReadingTips/ReadingTipsStep";
import ContactStep from "../Contact/ContactStep";
import CoursesStep from "../Courses/CoursesStep";
import AboutMeStep from "../AboutMe/AboutMeStep";

import HomepageTcm from "../Homepage/HomepageTcm";
import ConceptTcm from "../ConceptExplained/ConceptTcm";
import ReadingTipsTcm from "../ReadingTips/ReadingTipsTcm";
import ContactTcm from "../Contact/ContactTcm";
import CoursesTcm from "../Courses/CoursesTcm";
import AboutMeTcm from "../AboutMe/AboutMeTcm";

import { Mode } from "../dataclasses/Mode";
import { PAGES } from "../Constants";

const step_routes: IRoute[] = [
    {
        path: "",
        element: <HomepageStep />,
        icon: <Home />,
        title: PAGES.HOMEPAGE.name,
    },
    {
        path: `${PAGES.COURSES.path}`,
        element: <CoursesStep />,
        icon: <DateRange />,
        title: PAGES.COURSES.name,
    },
    {
        path: `${PAGES.CONCEPT.path}`,
        element: <ConceptStep />,
        icon: <Info />,
        title: PAGES.CONCEPT.name,
    },
    {
        path: `${PAGES.ABOUT.path}`,
        element: <AboutMeStep />,
        icon: <ContactPage />,
        title: PAGES.ABOUT.name,
    },
    {
        path: `${PAGES.READING_TIPS.path}`,
        element: <ReadingTipsStep />,
        icon: <Bookmark />,
        title: PAGES.READING_TIPS.name,
    },
    {
        path: `${PAGES.CONTACT.path}`,
        element: <ContactStep />,
        icon: <Email />,
        title: PAGES.CONTACT.name,
    },
]

const tcm_routes: IRoute[] = [
    {
        path: "",
        element: <HomepageTcm />,
        icon: <Home />,
        title: PAGES.HOMEPAGE.name,
    },
    {
        path: `${PAGES.COURSES.path}`,
        element: <CoursesTcm />,
        icon: <DateRange />,
        title: PAGES.COURSES.name,
    },
    {
        path: `${PAGES.CONCEPT.path}`,
        element: <ConceptTcm />,
        icon: <Info />,
        title: PAGES.CONCEPT.name,
    },
    {
        path: `${PAGES.ABOUT.path}`,
        element: <AboutMeTcm />,
        icon: <ContactPage />,
        title: PAGES.ABOUT.name,
    },
    {
        path: `${PAGES.READING_TIPS.path}`,
        element: <ReadingTipsTcm />,
        icon: <Bookmark />,
        title: PAGES.READING_TIPS.name,
    },
    {
        path: `${PAGES.CONTACT.path}`,
        element: <ContactTcm />,
        icon: <Email />,
        title: PAGES.CONTACT.name,
    },
]

const routes: Map<Mode, IRoute[]> = new Map([
    [Mode.STEP, step_routes],
    [Mode.TCM, tcm_routes],
],);

export default routes;

export interface IRoute {
    path: string,
    element: ReactNode,
    icon: ReactNode,
    title: string,
}