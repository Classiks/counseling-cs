class PAGES {
    public static HOMEPAGE: PageInfo = {
        name: "Startseite",
        path: ""
    };

    public static CONCEPT: PageInfo = {
        name: "Konzept",
        path: "concept"
    };

    public static ABOUT: PageInfo = {
        name: "Über mich",
        path: "about"
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
    PAGES,
    MOBILE_PX_CUTOFF
}

interface PageInfo {
    name: string;
    path: string;
}


const MOBILE_PX_CUTOFF: number = 768;