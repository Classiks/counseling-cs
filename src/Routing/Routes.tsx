import { ReactNode } from "react";
import { Route } from "react-router-dom";

import { Home, Bookmark, DateRange, Email, ContactPage } from "@mui/icons-material";

import HomepageStep from "../Homepage/HomepageStep";
import ReadingTipsStep from "../ReadingTips/ReadingTipsStep";
import ContactStep from "../Contact/ContactStep";
import CoursesStep from "../Courses/CoursesStep";
import AboutMeStep from "../AboutMe/AboutMeStep";

import HomepageTcm from "../Homepage/HomepageTcm";
import ReadingTipsTcm from "../ReadingTips/ReadingTipsTcm";
import ContactTcm from "../Contact/ContactTcm";
import CoursesTcm from "../Courses/CoursesTcm";

import Mode from "../components/Mode";
import { PAGES } from "../Constants";

const step_routes: IRoute[] = [
    {
        path: `/${Mode.STEP}`,
        element: <HomepageStep />,
        icon: <Home />,
        title: PAGES.HOMEPAGE.name,
    },
    {
        path: `/${Mode.STEP}/${PAGES.COURSES.path}`,
        element: <CoursesStep />,
        icon: <DateRange />,
        title: PAGES.COURSES.name,
    },
    {
        path: `/${Mode.STEP}/${PAGES.ABOUT.path}`,
        element: <AboutMeStep />,
        icon: <ContactPage />,
        title: PAGES.ABOUT.name,
    },
    {
        path: `/${Mode.STEP}/${PAGES.READING_TIPS.path}`,
        element: <ReadingTipsStep />,
        icon: <Bookmark />,
        title: PAGES.READING_TIPS.name,
    },
    {
        path: `/${Mode.STEP}/${PAGES.CONTACT.path}`,
        element: <ContactStep />,
        icon: <Email />,
        title: PAGES.CONTACT.name,
    },
]

const tcm_routes: IRoute[] = [
    {
        path: `/${Mode.TCM}`,
        element: <HomepageTcm />,
        icon: <Home />,
        title: PAGES.HOMEPAGE.name,
    },
    {
        path: `/${Mode.TCM}/${PAGES.COURSES.path}`,
        element: <CoursesTcm />,
        icon: <DateRange />,
        title: PAGES.COURSES.name,
    },
    {
        path: `/${Mode.TCM}/${PAGES.READING_TIPS.path}`,
        element: <ReadingTipsTcm />,
        icon: <Bookmark />,
        title: PAGES.READING_TIPS.name,
    },
    {
        path: `/${Mode.TCM}/${PAGES.CONTACT.path}`,
        element: <ContactTcm />,
        icon: <Email />,
        title: PAGES.CONTACT.name,
    },
]

const routes: Map<Mode, IRoute[]> = new Map([
    [Mode.STEP, step_routes],
    [Mode.TCM, tcm_routes],
],);

const stepRoutes: ReactNode = [
    <Route key="homepage" path={`/${Mode.STEP}`} element={<HomepageStep />} />,
    <Route key="courses" path={`/${Mode.STEP}/${PAGES.COURSES.path}`} element={<CoursesStep />} />,
    <Route key="about" path={`/${Mode.STEP}/${PAGES.ABOUT.path}`} element={<AboutMeStep />} />,
    <Route key="reading-tips" path={`/${Mode.STEP}/${PAGES.READING_TIPS.path}`} element={<ReadingTipsStep />} />,
    <Route key="contact" path={`/${Mode.STEP}/${PAGES.CONTACT.path}`} element={<ContactStep />} />,
]

const tcmRoutes: ReactNode = [
    <Route key="homepage" path={`/${Mode.TCM}`} element={<HomepageTcm />} />,
    <Route key="courses" path={`/${Mode.TCM}/${PAGES.COURSES.path}`} element={<CoursesTcm />} />,
    <Route key="reading-tips" path={`/${Mode.TCM}/${PAGES.READING_TIPS.path}`} element={<ReadingTipsTcm />} />,
    <Route key="contact" path={`/${Mode.TCM}/${PAGES.CONTACT.path}`} element={<ContactTcm />} />,
]

export { 
    stepRoutes ,
    tcmRoutes,
};


export default routes;

export interface IRoute {
    path: string,
    element: ReactNode,
    icon: ReactNode,
    title: string,
}