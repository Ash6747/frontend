import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { Phone, Headphones } from "lucide-react";
import Image from "../../components/common/Image";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFirstSectionOut, setIsFirstSectionOut] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 999);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false);
  };

  const navItems = useMemo(() => [
    { text: "Overview", href: "#about-cygnus" },
    { text: "Highlights", href: "#Highlights" },
    { text: "Configuration", href: "#floor_plan" },
    { text: "Gallery", href: "#Gallery" },
    { text: "Amenities", href: "#amenities" },
    { text: "About VTP", href: "#about_us_wrapper" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 999);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 999;
      const firstSection = document.querySelector(".first-section");
      if (!firstSection) return;

      const topBoundary = firstSection.offsetHeight;
      const isFirstSectionScrolledOut = window.scrollY >= topBoundary;

      setIsFirstSectionOut(isFirstSectionScrolledOut);

      if (!isMobile) {
        setIsVisible(window.scrollY < lastScrollY);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="header-wrapper">
        <header id="header" className={`header ${isMobile ? "sticky" : (isFirstSectionOut ? (isVisible ? "sticky" : "hidden") : "")}`}>
          <nav className="navbar navbar-expand-lg side-space header_spacing m-auto mt-0 mb-2 mb-lg-0" data-aos="fade-up">
            <Link className="vtplogo" to="/" aria-label="Chrysos VTP Luxe Home" onClick={scrollToTop}>
              <Image src="/logo.png" fallbackSrc="/logo.png" alt="project logo" />
            </Link>

            <span className="golden-dot"></span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobile_toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <div className="close-btn-icon">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                      <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              ) : (
                <div className="open-btn-icon">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H14M4 18H9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </button>
            <div className={`collapse navbar-collapse text-center ${menuOpen ? "show" : ""}`} id="mobile_toggle">
              <ul className="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                {navItems.map((item, index) => (
                  <li
                    className={`nav-item ${!item.noBorder ? "link-border" : ""} ${activeIndex === index ? "active" : ""}`}
                    key={index}
                    onClick={() => handleNavClick(index)}
                  >
                    <a className="nav-link" href={item.href} aria-label={`Navigate to ${item.text} section`}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="header-btn-container flex-md-row flex-column">
                {/* <li>
                  <a
                    href="tel:07969292616"
                    className="page-btn btn-secondary center-flex"
                    aria-label="Call sales at 07969292616"
                  >
                    <Phone size={15} />
                    07969292616
                  </a>
                </li> */}
                <li className="page-btn-hide">
                  <button
                    className="page-btn primary center-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#enquirynowmodal"
                    aria-label="Open Schedule a Visit enquiry form modal"
                  >
                    Schedule a Visit
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
