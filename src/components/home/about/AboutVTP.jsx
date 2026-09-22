import { Suspense } from "react";
import { Star } from "lucide-react";
import "./About.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const AboutVTP = ({ data }) => {

  const stats = data?.aboutCounter || [];
  return (
    <Suspense fallback={null}>
      <>
        {/* <section id="about_us_wrapper" className="aboutSection">
        <video
          className="about-bg-img"
          aria-label="Promotional Video"
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          fetchpriority="high"
          src="/images/overview/Entrance.mp4"
        ></video>
        <div className="about-vtp-wrapper section-space side-space">
          <div className="about-vtp-content text-center ">
            <div className="title-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <h2 className="sec_title small">About VTP Realty</h2>
            </div>
            <p className="about-vtp-desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{data?.aboutRealty?.description1}</p>

            <ul className="ov-list-container gradient-border-mask">
              {stats.map((item, index) => {

                return (
                  <li className="ov-list-item" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                    <h5 className="ov-list-title">
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2.75}
                        suffix={` ${item.postfix || ""}`}
                        separator=""
                        decimals={
                          item.isDecimal
                            ? item.number.toString().split(".")[1]?.length || 0
                            : 0
                        }
                        decimal="."
                      >
                        {({ countUpRef, start }) => (
                          <ReactVisibilitySensor onChange={start} delayedCall>
                            <div className="counterNumber">
                              <span ref={countUpRef} />
                            </div>
                          </ReactVisibilitySensor>
                        )}
                      </CountUp>
                    </h5>

                    <span className="ov-list-break">
                      <Star size={16} fill="currentColor" />
                    </span>

                    <p className="ov-list-desc">
                      {item.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section> */}

        <section id="about_us_wrapper" className="row aboutSection about_chrysos_ove side-space pe-lg-0 section-space justify-content-between">
          {/* Left Image Section */}
          <div className="col-lg-5 text-section">
            <div className="inner-content side-space p-lg-0">
              <h2 className="codename sec_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                About VTP Realty
              </h2>

              <p className="description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                {data?.aboutRealty?.description1}
              </p>

              <div className="ov-list-wrapper d-none d-lg-block" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <ul className="ov-list-container gradient-border-mask">
                  {stats.map((item, index) => {

                    return (
                      <li className="ov-list-item" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                        <h5 className="ov-list-title">
                          <CountUp
                            start={0}
                            end={item.number}
                            duration={2.75}
                            suffix={` ${item.postfix || ""}`}
                            separator=""
                            decimals={
                              item.isDecimal
                                ? item.number.toString().split(".")[1]?.length || 0
                                : 0
                            }
                            decimal="."
                          >
                            {({ countUpRef, start }) => (
                              <ReactVisibilitySensor onChange={start} delayedCall>
                                <div className="counterNumber">
                                  <span ref={countUpRef} />
                                </div>
                              </ReactVisibilitySensor>
                            )}
                          </CountUp>
                        </h5>

                        <span className="ov-list-break">
                          <Star size={16} fill="currentColor" />
                        </span>

                        <p className="ov-list-desc">
                          {item.title}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>

          {/* Right Text Section (one-by-one animation) */}
          <div className="col-lg-7 left-image direct-up" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <video
              aria-label="Promotional Video"
              loop
              muted
              autoPlay
              playsInline
              preload="none"
              poster="/images/overview/Entrance.webp"
              src="/images/overview/Entrance.mp4"
            ></video>

          </div>
          <ul className="ov-list-container gradient-border-mask d-flex d-lg-none">
            {stats.map((item, index) => {

              return (
                <li className="ov-list-item" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                  <h5 className="ov-list-title">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.75}
                      suffix={` ${item.postfix || ""}`}
                      separator=""
                      decimals={
                        item.isDecimal
                          ? item.number.toString().split(".")[1]?.length || 0
                          : 0
                      }
                      decimal="."
                    >
                      {({ countUpRef, start }) => (
                        <ReactVisibilitySensor onChange={start} delayedCall>
                          <div className="counterNumber">
                            <span ref={countUpRef} />
                          </div>
                        </ReactVisibilitySensor>
                      )}
                    </CountUp>
                  </h5>

                  <span className="ov-list-break">
                    <Star size={16} fill="currentColor" />
                  </span>

                  <p className="ov-list-desc">
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    </Suspense>
  );
};

export default AboutVTP;
