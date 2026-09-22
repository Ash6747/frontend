import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Overview.css";
import PageBtn from "../../common/PageBtn";
import ClubhouseVideo from "./ClubhouseVideo";

const Overview = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000, // slower animation
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      id="about-cygnus"
      className="about-cygnus-container"
    >
      <section className="row about_chrysos_ove side-space pe-lg-0 section-space pb-0 justify-content-between">
        {/* Left Image Section */}
        <div className="col-lg-4 text-section">
          <div className="inner-content side-space p-lg-0">
            <h3 className="sub_title sub_title-overview" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">The Isle of Wonder</h3>
            <h3 className="codename sec_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              Pune's first <br /> villas in the sky
            </h3>
            <h3 className="sub_title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Baner Next, Mahalunge</h3>

            <p className="description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              The sky stretches above. The world moves below. And somewhere in between, a ‘Never Before’ home resides in perfect balance. This is one of those moments when you realise you have never seen something like this before.
            </p>

            <PageBtn text="Get the Brochure" className="mb-4 mb-lg-0" isPdf={true} />

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
            poster="/videos/banner/ban-1-opt.webp"
            src="/videos/banner/ban-1.mp4"
          ></video>

        </div>
      </section>

      <section className="section-space about_chrysos_ove2 side-space px-xl-0">
        <ClubhouseVideo
          videoId="iGMXnUF83Ww"
          poster="https://i.ytimg.com/vi/iGMXnUF83Ww/maxresdefault.jpg"
          title="A clubhouse like Never Before"
          className="mx-xl-auto"
        />
      </section>
    </div>
  );
};

export default Overview;
