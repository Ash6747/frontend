import "./Location.css";
import { Briefcase, Plane, ShoppingBag, GraduationCap, HeartPulse, Route } from "lucide-react";

const points = [
  { icon: Briefcase, desc: "Well Connected to Prominent IT Parks" },
  { icon: Plane, desc: "Swift Access To Pune International Airport" },
  { icon: ShoppingBag, desc: "Effortlessly Connected To Shopping Complexes" },
  { icon: GraduationCap, desc: "Minutes Away From Top International Schools" },
  { icon: HeartPulse, desc: "Convenient Access To Major Healthcare Centers" },
  { icon: Route, desc: "Seamless Access to National Highway" },
];

const Location = () => {

  const mapImage = "/images/location/map-1.webp";
  const currentPoints = points;

  return (
    <section id="location_wrapper" className="location-section section-space side-space">

        <div className="location-container">
          <div className="title-wrapper mx-auto text-center mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <h2 className="sec_title mx-auto">
              A ‘Never Before’ address.
              <br />
              <span className="sub_title">
                In a world called ‘Chrysos’
              </span>
            </h2>
            <h3 className="sub_title mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Baner Next, Mahalunge</h3>

          </div>

          <div className="row timeline">
            <div className="col-lg col-6 desktop-sec up-side" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
              <ul className="location-list left">
                {currentPoints.slice(0, 3).map((location, index) => {
                  const Icon = location.icon;
                  return (
                    <li className="location-item" key={index} data-aos="fade-right" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                      <div className="location-item-icon">
                        <Icon size={22} color="#fff" />
                      </div>
                      <p>
                        {location.time && (
                          <>
                            {location.time}
                            <br />
                          </>
                        )}
                        {location.desc}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="col-lg-5 col-xxl-5 location-col-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              <div className="map-container gradient-border-mask">
                <a href={mapImage}
                  data-fancybox="Location"
                  aria-label="Location map of VTP Chrysos in Kharadi Pune with nearby connectivity"
                >
                  <img
                    src={mapImage}
                    className="img-fluid location-map desktop-sec"
                    height="100%"
                    width="100%"
                    alt="Location map of VTP Chrysos in Kharadi Pune with nearby connectivity"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    loading="lazy"
                  />
                </a>

                <div className="mobile-view timeline-mobile-wrapper d-md-none">
                  {currentPoints.map((item, j) => (
                    <div key={j} className={`timeline-point-mobile tpm-${j + 1}`} data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + j * 50}>
                      <div className="location-icon">
                        <item.icon size={22} color="#fff" />
                      </div>
                      <div className="content_parent">
                        {item.time && (<p className="time">{item.time}</p>)}
                        <p className="desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg col-6 desktop-sec up-side" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
              <ul className="location-list right">
                {currentPoints.slice(3).map((location, index) => {
                  const Icon = location.icon;
                  return (
                    <li className="location-item" key={index} data-aos="fade-left" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                      <div className="location-item-icon">
                        <Icon size={22} color="#fff" />
                      </div>
                      <p>

                        {location.time && (
                          <>
                            {location.time}
                            <br />
                          </>
                        )}
                        {location.desc}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="col-12 d-md-none">
              <ul className="location-list mobile-list">
                {currentPoints.map((location, index) => {
                  const Icon = location.icon;
                  return (
                    <li className="location-item" key={index} data-aos="fade-left" data-aos-duration="800" data-aos-delay={100 + index * 100}>
                      <div className="location-item-icon">
                        <Icon size={22} color="#fff" />
                      </div>
                      <p>

                        {location.time && (
                          <>
                            {location.time}
                            <br />
                          </>
                        )}
                        {location.desc}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Location;
