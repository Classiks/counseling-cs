import Mode from "./Mode";
import { Location } from "react-router-dom";

export default class UrlParser {
    public static getModeFromUrl(location: Location): Mode {
        return UrlParser.parseUrl(location).mode;
    }

    public static getPageFromUrl(location: Location): string {
        return UrlParser.parseUrl(location).page;
    }

    public static getPathFromUrl(location: Location): string {
        return location.pathname;
    }
    
    private static parseUrl(location: Location): { mode: Mode, page: string } {
        const pathArray: string[] = location.pathname.split("/");
        const mode: Mode = pathArray[1] as Mode;
        const page: string = pathArray[2];

        return { mode, page };
    }
}