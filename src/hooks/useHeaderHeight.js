import { useState, useEffect, useRef } from "react";

const useHeaderHeight = (extraOffset = 0) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const calculateHeaderHeight = () => {
            if (window.innerWidth <= 990) {
                if (headerRef.current) {
                    setHeaderHeight(headerRef.current.offsetHeight);
                }
            } else {
                // Reset for larger screens
                setHeaderHeight(0);
            }
        };

        calculateHeaderHeight();

        const resizeObserver = new ResizeObserver(calculateHeaderHeight);

        if (headerRef.current && window.innerWidth <= 990) {
            resizeObserver.observe(headerRef.current);
        }

        window.addEventListener("resize", calculateHeaderHeight);
        window.addEventListener("scroll", calculateHeaderHeight);

        return () => {
            window.removeEventListener("resize", calculateHeaderHeight);
            window.removeEventListener("scroll", calculateHeaderHeight);
            if (headerRef.current) {
                resizeObserver.unobserve(headerRef.current);
            }
        };
    }, []);

    return {
        headerRef,
        headerHeight,
        marginTop: window.innerWidth <= 990 ? headerHeight + extraOffset : 0,
    };
};

export default useHeaderHeight;
