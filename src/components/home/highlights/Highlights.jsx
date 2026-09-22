import { useEffect, useState, useRef } from "react";

import "./Highlights.css";

import {
  LuBuilding2 as Building2,
  LuBuilding as Building,
  LuLayers as Layers,
  LuMaximize2 as Maximize2,
  LuArrowUpDown as ArrowUpDown,
  LuLandmark as Landmark,
  LuSparkles as Sparkles,
  LuDoorOpen as DoorOpen,
  LuStar as Star,
} from "react-icons/lu";

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
      icon: Building2,
      title: "Pune's First Villas in the Sky",
    },
    {
      icon: Building,
      title: "Tallest Tower in the Area at a clear height of 135 meters",
    },
    {
      icon: Layers,
      title: "Every Villa has Two-levels",
    },
    {
      icon: Maximize2,
      title: "21.5 ft Double-Height Living",
    },
    {
      icon: ArrowUpDown,
      title: "Private Elevator in Every Home",
    },
    {
      icon: Landmark,
      title: "Architectural Landmark with Striking Elevation",
    },
    {
      icon: Sparkles,
      title: "Grand Arrival Experience",
    },
    {
      icon: DoorOpen,
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
        <div className="highlight-content">
          <h2 className='sec_title text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            Never Before was never meant to be just a phrase
            <br />
          </h2>
          {/* Content */}
          <span className="ov-list-break" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Star size={16} fill="currentColor" />
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
                          <Star size={16} fill="currentColor" />
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
      </section>
    </>
  );
};

export default Highlights;
