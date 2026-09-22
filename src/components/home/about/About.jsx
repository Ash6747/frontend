import { Suspense } from "react";
import { LuStar as Star } from "react-icons/lu";
import "./About.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import StarIcon from "../../../assets/svg/StarIcon";

const About = ({ data }) => {

  const stats = data?.aboutCounter || [];
  return (
    <Suspense fallback={null}>
      <>
        <section id="about_us_wrapper" className="row aboutSection side-space pe-lg-0 section-space justify-content-between">
          {/* Left Image Section */}
          <div className="col-lg-7 text-section">
            <div className="inner-content side-space p-lg-0">
              <div className="title-wrapper">
                <h2 className="sub_title">
                  <StarIcon /> ABOUT PURPLE CORP
                </h2>
                <h2 className="sec_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  A LEGACY OF TRUST
                </h2>
              </div>

              <p className="description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                At Purple Corp, we create lifestyles that inspire and endure. With 28 years of trust and innovation, we’ve delivered 30 landmark projects, 10,000+ residential and commercial units, and 20 million sq. ft. of thoughtfully crafted spaces, enriching the lives of over 40,000 residents.
              </p>
              <p className="description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                Looking ahead, we aim to shape how 50,000 people live by 2035 creating spaces that simplify life, foster connection, and add meaning. Driven by customer-centricity, excellence, and shared growth, Purple Corp continues to reimagine urban living for generations to come.
              </p>

              <div className="snap-wrapper" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <ul className="snap-container row">
                  {stats.map((item, index) => {

                    return (
                      <li className="col" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                        <div className="snap-item">
                          <h4 className="snap-title">
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
                          </h4>

                          <p className="snap-desc">
                            {item.title}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>

          {/* Right Text Section (one-by-one animation) */}
          <div className="col-lg-7 left-image direct-up" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">


          </div>
        </section>
      </>
    </Suspense>
  );
};

export default About;
