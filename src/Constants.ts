class PAGES {
    public static HOMEPAGE: PageInfo = {
        name: "Startseite",
        path: ""
    };

    public static READING_TIPS: PageInfo = {
        name: "Lesetipps",
        path: "reading-tips"
    };

    public static COURSES: PageInfo = {
        name: "Kurse und Termine",
        path: "courses"
    };
    
    public static CONTACT: PageInfo = {
        name: "Kontakt",
        path: "contact"
    }
}

export {
    PAGES
}

interface PageInfo {
    name: string;
    path: string;
}
