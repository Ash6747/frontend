import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ProjectLayout.css';
import PageBtn from '../../common/PageBtn';

gsap.registerPlugin(ScrollTrigger);

const ProjectLayout = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%", // Section enters halfway in viewport
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      overlayRef.current,
      {
        y: 200,   // vertical from bottom
        x: -100,  // horizontal from left
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 2.2, // slower
        ease: "power4.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="vtp-banner-wrapper" id="overview" ref={sectionRef}>
      <img
        src="/images/amenities/verve/converted/a12.webp"
        // src="/images/overview/overviewBackImage1.webp"
        alt="VTP CODENAME CYGNUS Crafted For Exceptional Living"
        className="vtp-banner-img"
        loading='lazy'
      />

      <div className="vtp-overlay">
        <div className="vtp-ellipse" ref={overlayRef}>
          <div className="vtp-content">
            <div className="content">
              <h2 className="vtp-heading sec_title text-white">
                VTP Chrysos
                {/* <br /> Where Stars Align <br /> 
                For Your Home */}
              </h2>
              <p className="vtp-tagline">Crafted For Exceptional Living</p>
              <p className="plans-box mb-3">2 & 3 BED Premium homes</p>
              <div className="page-btn-overiew">
                <PageBtn type="gold" text="Ask For Price" isSubmit={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLayout;
