import { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../../common/SectionTitle";

const SnapshotFrame = ({ className = "" }) => (
  <svg viewBox="0 0 200 235" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="1" y="1" width="198" height="233" rx="10" stroke="currentColor" strokeOpacity="0.2" />
  </svg>
);

const SnapshotPilar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BrandSnapshot.css";

const BrandSnapshots = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 552);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = data?.aboutCounter || [];

  return (
    <div className="brand-snapshots-wrapper text-center side-space">
        <div className="mb-md-5 mb-3">
          <SectionTitle text="VTP BRAND SNAPSHOTS" />
        </div>

        <div className="containe for-mobile">
          {isMobile ? (
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              // pagination={{ clickable: true }}
              modules={[Autoplay]}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {stats.map((item, idx) => (
                <SwiperSlide key={`counter_mobile_${idx}`}>
                  <div className="snapshot-item brand-items">
                    <SnapshotFrame className="snap_frame" />
                    <div className="arch">
                      <h3 className="snapshot-value counter">
                        <CountUp
                          start={0}
                          end={item.number}
                          duration={2.75}
                          suffix={` ${item.postfix || ""}`}
                          // decimals={item.isDecimal ? 1 : 0}
                          separator=""
                          decimals={
                            item.isDecimal
                              ? item.number.toString().split(".")[1]?.length || 0
                              : 0
                          }
                          decimal="."
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div className="counterNumber">
                                <span ref={countUpRef} />
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h3>
                      <p className="snapshot-label counter_txt">{item.title}</p>
                      <div className="pillar_svg">
                        <SnapshotPilar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="snap-shots-container">
              {stats.map((item, idx) => (
                <div
                  className="snapshot-item brand-items"
                  key={`counter_desktop_${idx}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <SnapshotFrame className="snap_frame" />
                  <div className="arch">
                    <h3 className="snapshot-value counter">
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2.75}
                        suffix={` ${item.postfix || ""}`}
                        // decimals={item.isDecimal ? 1 : 0}
                        // separator=""
                        // decimal="."
                        separator=""
                          decimals={
                            item.isDecimal
                              ? item.number.toString().split(".")[1]?.length || 0
                              : 0
                          }
                          decimal="."
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <div className="counterNumber">
                              <span ref={countUpRef} />
                            </div>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h3>
                    <p className="snapshot-label counter_txt">{item.title}</p>
                    <div className="pillar_svg">
                      <SnapshotPilar />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
};

export default BrandSnapshots;
