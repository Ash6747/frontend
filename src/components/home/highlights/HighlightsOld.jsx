import { useEffect, useState, useRef, lazy, Suspense } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "../../common/SectionTitle";

import "./Highlights.css";
import HighlightGallery from "./HighlightGallery";
import PageBtn from "../../common/PageBtn";

const StarIcon = lazy(() => import("../../../assets/svg/StarIcon"));
const Towers4 = lazy(() => import("../../../assets/svg/Towers4"));
const Mins5 = lazy(() => import("../../../assets/svg/Mins5"));
const ClassicDesign = lazy(() => import("../../../assets/svg/ClassicDesign"));
const NextToBaif = lazy(() => import("../../../assets/svg/NextToBaif"));
const MajesticAmenities = lazy(() =>
  import("../../../assets/svg/MajesticAmenities")
);
const PrivacyOpenViews = lazy(() =>
  import("../../../assets/svg/PrivacyOpenViews")
);
const Lush = lazy(() => import("../../../assets/svg/Lush"));
const TownshipLiving = lazy(() =>
  import("../../../assets/svg/TownshipLiving")
);

gsap.registerPlugin(ScrollTrigger);

const HighlightsOld = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const highlights = [
    { icon: <Towers4 />, title: "4 Towers", subtitle: "Of 36 Storeys each" },
    {
      icon: <ClassicDesign />,
      title: "European Design",
      subtitle: "With Modern Aesthetics",
    },
    {
      icon: <Mins5 />,
      title: "10 Mins",
      subtitle: "From EON IT Park & WTC",
    },
    { icon: <NextToBaif />, title: "Next", subtitle: "To BAIF Forest" },
    {
      icon: <MajesticAmenities />,
      title: "35+ Majestic",
      subtitle: "Amenities",
    },
    {
      icon: <PrivacyOpenViews />,
      title: "100%",
      subtitle: "Privacy & Open Views",
    },
    {
      icon: <Lush />,
      title: "Lush",
      subtitle: "Greenery & Open Spaces",
    },
    {
      icon: <TownshipLiving />,
      title: "Township Living",
      subtitle: "With 8000+ Families",
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
          <div className="row align-items-center">
            <div className="col-md-5 col-xxl-4">
              <div className="highlight-content">
                {/* Content */}
                <h2 className='sec_title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  Never Before was never meant to be just a phrase
                  <br />
                </h2>
                <span className="ov-list-break" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <StarIcon />
                </span>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  Chrysos by VTP Luxe carries that philosophy forward with a more generous scale, a more refined taste, and a sense of permanence that suits those who prefer the finest things in life. The double-height living becomes a signature, so your home carries the charm of a private villa while enjoying the scale and stature of elevation.
                </p>

                <PageBtn text="Reserve your preview" isPdf={true} />

              </div>
            </div>
            <div className="col-md-7 col-xxl-8" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <HighlightGallery />
            </div>
          </div>
        </Suspense>
      </section>
      {/* <div className="highlight-bg section-space">
        <img
          src="/images/highlights/gallery-vid.gif"
          alt="Chrysos by VTP Luxe"
          className="highlight-bg-img"
        />
      </div> */}
    </>
  );
};

export default HighlightsOld;
