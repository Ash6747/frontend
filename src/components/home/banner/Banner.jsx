import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LuSun as Sun, LuMoonStar as MoonStar } from "react-icons/lu";
import useTheme from "../../../hooks/useTheme";
import "./Banner.css";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  const lightImg = "/images/banner/light-desk-ban.png";
  const darkImg = "/images/banner/dark-desk-ban.png";
  const currentImg = isDark ? darkImg : lightImg;

  return (
    <section id="banner" ref={bannerRef} className="banner_section first-section">
      <div className="banner_image">
        <picture className="banner-picture">
          <source media="(max-width: 768px)" srcSet={currentImg} />
          <img
            src={currentImg}
            alt="The Raya at Park Street"
            className="banner-img"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Theme Mode Switcher matching the reference UI */}
      <div className="banner-theme-switch-wrapper" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
        <button
          type="button"
          onClick={toggleTheme}
          className="banner-theme-switch"
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          title={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <div className={`switch-knob ${isDark ? "dark" : "light"}`} />
          <span className={`switch-icon-box sun ${!isDark ? "active" : ""}`}>
            <Sun size={20} strokeWidth={2.4} fill="currentColor" />
          </span>
          <span className={`switch-icon-box moon ${isDark ? "active" : ""}`}>
            <MoonStar size={19} strokeWidth={2.4} fill="currentColor" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Banner;
