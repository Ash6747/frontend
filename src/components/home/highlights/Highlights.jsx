import { useEffect, useState, useRef, lazy, Suspense } from "react";

import "./Highlights.css";

const StarIcon = lazy(() => import("../../../assets/svg/StarIcon"));
const Highlights1 = lazy(() => import("../../../assets/svg/Highlights1"));
const Highlights2 = lazy(() => import("../../../assets/svg/Highlights2"));
const Highlights3 = lazy(() => import("../../../assets/svg/Highlights3"));
const Highlights4 = lazy(() => import("../../../assets/svg/Highlights4"));
const Highlights5 = lazy(() => import("../../../assets/svg/Highlights5"));
const Highlights6 = lazy(() => import("../../../assets/svg/Highlights6"));
const Highlights7 = lazy(() => import("../../../assets/svg/Highlights7"));
const Highlights8 = lazy(() => import("../../../assets/svg/Highlights8"));

const Highlights = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const highlights = [
    {
      icon: Highlights1,
      breakIcon: StarIcon,
      title: "Pune's First Villas in the Sky",
    },
    {
      icon: Highlights2,
      breakIcon: StarIcon,
      title: "Tallest Tower in the Area at a clear height of 135 meters",
    },
    {
      icon: Highlights3,
      breakIcon: StarIcon,
      title: "Every Villa has Two-levels",
    },
    {
      icon: Highlights4,
      breakIcon: StarIcon,
      title: "21.5 ft Double-Height Living",
    },
    {
      icon: Highlights5,
      breakIcon: StarIcon,
      title: "Private Elevator in Every Home",
    },
    {
      icon: Highlights6,
      breakIcon: StarIcon,
      title: "Architectural Landmark with Striking Elevation",
    },
    {
      icon: Highlights7,
      breakIcon: StarIcon,
      title: "Grand Arrival Experience",
    },
    {
      icon: Highlights8,
      breakIcon: StarIcon,
      title: "Double-Height Lift Lobby",
    },
  ];

  return (
    <>
      <section
        id="Highlights"
        className="side-space section-space highlight-wrapper"
        ref={sectionRef}
      >
        <Suspense fallback={<div style={{ minHeight: 60 }} />}>
          <div className="highlight-content">
            <h2 className='sec_title text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              Never Before was never meant to be just a phrase
              <br />
            </h2>
            {/* Content */}
            <span className="ov-list-break" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <StarIcon />
            </span>
            <p className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              Chrysos by VTP Luxe carries that philosophy forward with a more generous scale, a more refined taste, and a sense of permanence that suits those who prefer the finest things in life. The double-height living becomes a signature, so your home carries the charm of a private villa while enjoying the scale and stature of elevation.
            </p>

            <div className="ov-list-container gradient-border-mask mt-3">
              <ul className="row w-100 g-0 justify-content-center m-0 p-0 list-unstyled">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  const BreakIcon = item.breakIcon;

                  return (
                    <li
                      className="col-lg-3 col-6"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay={100 + index * 100}
                    >
                      <div className="ov-list-item">
                        {Icon && (
                          <div className="ov-list-icon">
                            <Icon />
                          </div>
                        )}

                        <span className="ov-list-break">
                          <BreakIcon />
                        </span>

                        <h5 className="ov-list-subtitle">
                          {item.title}
                        </h5>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Suspense>
      </section>
    </>
  );
};

export default Highlights;
