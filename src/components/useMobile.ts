import { useState, useEffect } from 'react';
import { MOBILE_PX_CUTOFF } from '../Constants';

export default function useMobile() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width <= MOBILE_PX_CUTOFF;

    return isMobile;
}
