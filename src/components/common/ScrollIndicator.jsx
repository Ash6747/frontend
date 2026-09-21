import { useState, useEffect, useRef, useMemo } from "react";
import "../../assets/css/menuscroll.css";

const ScrollIndicator = () => {
  const navItems = useMemo(
    () => [
      { text: "Overview", href: "#about-cygnus" },
      { text: "Highlights", href: "#Highlights" },
      { text: "Configuration", href: "#floor_plan" },
      { text: "Gallery", href: "#gallery" },
      { text: "Amenities", href: "#amenities" },
    ],
    [],
  );

  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [leavingIndex, setLeavingIndex] = useState(-1);

  const scrollTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const sectionPositions = useRef([]);
  const ticking = useRef(false);

  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(Date.now());

  const SPEED_THRESHOLD = 5.2; // px per ms

  const updateSectionPositions = () => {
    sectionPositions.current = navItems
      .map((item) => {
        const el = document.querySelector(item.href);
        return el ? { top: el.offsetTop, height: el.offsetHeight } : null;
      })
      .filter(Boolean);
  };

  useEffect(() => {
    updateSectionPositions();
    lastScrollYRef.current = window.scrollY;
    lastScrollTimeRef.current = Date.now();

    window.addEventListener("resize", updateSectionPositions);
    return () => window.removeEventListener("resize", updateSectionPositions);
  }, [navItems]);

  const handleScroll = () => {
    if (!ticking.current) {
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const now = Date.now();
        const scrollY = window.scrollY;
        const middle = scrollY + window.innerHeight / 2;

        const deltaY = Math.abs(scrollY - lastScrollYRef.current);
        const deltaTime = now - lastScrollTimeRef.current || 1;
        const scrollSpeed = deltaY / deltaTime;

        lastScrollYRef.current = scrollY;
        lastScrollTimeRef.current = now;

        if (scrollSpeed >= SPEED_THRESHOLD) {
          setIsVisible(true);

          if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 2000);
        }

        let found = false;

        sectionPositions.current.forEach((section, index) => {
          if (middle >= section.top && middle < section.top + section.height) {
            if (activeIndex !== index) {
              setLeavingIndex(activeIndex);

              if (leaveTimeoutRef.current)
                clearTimeout(leaveTimeoutRef.current);
              leaveTimeoutRef.current = setTimeout(
                () => setLeavingIndex(-1),
                500,
              );
            }

            setActiveIndex(index);
            found = true;
          }
        });

        if (!found && activeIndex !== -1) {
          setLeavingIndex(activeIndex);

          if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
          leaveTimeoutRef.current = setTimeout(() => setLeavingIndex(-1), 500);

          setActiveIndex(-1);
        }

        ticking.current = false;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeoutRef.current);
      clearTimeout(hoverTimeoutRef.current);
      clearTimeout(leaveTimeoutRef.current);
    };
  }, [activeIndex]);

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <div
      className={`scroll-indicator ${isVisible ? "visible" : ""}`}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="indicator-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`indicator-item ${
              index === activeIndex ? "active" : ""
            } ${index === leavingIndex ? "leaving" : ""}`}
            onClick={() =>
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollIndicator;
