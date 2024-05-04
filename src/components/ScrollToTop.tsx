import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const element = document.querySelector(".container-to-scroll"); // Adjust the selector as needed
        if (element) {
            element.scrollTop = 0;
        }
    }, [pathname]);

    return null;
}