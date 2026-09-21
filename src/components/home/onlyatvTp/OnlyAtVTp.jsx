import { useEffect, useRef } from "react";
import SectionTitle from "../../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OnlyAtVTp.css";

gsap.registerPlugin(ScrollTrigger);

const pillarData = [
  { text: "2000 Sq.Ft. Fully Equipped Gym", image: "/images/pillars/p1.png", },
  { text: "Three-Tier 24x7 Safety & Security", image: "/images/pillars/p2.png", },
  { text: "Max Sunlight & Ventilation In Each Home", image: "/images/pillars/pillar3.png", },
  { text: "Digital Door Lock & Smart Home Automation", image: "/images/pillars/pillar3.png", },
  { text: "Grand Shopping Boulevard", image: "/images/pillars/p2.png", },
  { text: "Grand Amenities For All Ages", image: "/images/pillars/p1.png", },
];

const OnlyAtVTp = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".only-vtp-desktop .pillar-item");

    gsap.set(items, { opacity: 0, y: 200 });

    ScrollTrigger.batch(items, {
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: {
            each: 0.3,
            from: "edges",
          },
          ease: "power2.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      id="OnlyatVTp"
      className="OnlyatVTp side-space section-space"
      ref={sectionRef}
    >
      <div className="text-center p-0">
        <div className="only-title">
          <SectionTitle text="Only at VTP" />
        </div>


        <div className="only-vtp-desktop d-none d-md-block">
          <div className="row justify-content-center pillars-wrapper">
            {pillarData.map((item, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-2 pillar-col">
                <div className="pillar-item">
                  <p className="pillar-text">{item.text}</p>
                  <div className="pillar-graphic">
                    <img src={item.image} alt="Pillar" className="pillar-img" loading="lazy"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="only-vtp-mobile d-block d-md-none">
          <Swiper
            spaceBetween={0}
            slidesPerView={2.1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            {pillarData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pillar-item">
                  <p className="pillar-text">{item.text}</p>
                  <div className="pillar-graphic">
                    <img src="/images/pillars/pillar4.png" alt="Pillar" className="pillar-img" loading="lazy" height="100%" width="100%" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OnlyAtVTp;
