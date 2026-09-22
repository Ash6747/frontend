import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "./Banner.css";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 552); // Initialize state correctly
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 552);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperSettings = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: true,
    // autoplay: false,
    loop: true,
    pagination: false,
    modules: [Autoplay],
  };

  const desktopBanners = [
    {
      video: {
        src: '/videos/banner/banner.mp4',
        poster: '/images/aboutVTp/villa-in-sky.webp',
        overlay: '/images/aboutVTp/villa-in-sky-ovrl.webp',
        // src: '/videos/banner/ban-1.mp4',
        // poster: '/videos/banner/ban-1-opt.webp',
      },
      alt: "",
      title: "A creation built to be legendary,",
      subtitle: "like Never Before",
      subtitle2: "Baner Next, Mahalunge",
    },
  ];

  const mobileBanners = [
    {
      video: {
        src: '/videos/banner/mob-banner.mp4',
        poster: '/images/aboutVTp/villa-in-sky.webp',
        overlay: '/images/aboutVTp/villa-in-sky-ovrl.webp',
        // src: '/videos/banner/mob-banner.mp4',
        // poster: '/videos/banner/mob-ban-1.webp',
      },
      alt: "",
      title: "A Creation Built To Be Legendary,",
      subtitle: "Like Never Before",
      subtitle2: "Baner Next, Mahalunge",
    },
  ];

  const banners = isMobile ? mobileBanners : desktopBanners;

  return (
    <section id="banner" ref={bannerRef} className="banner_section first-section">
      <div className="ban-logo d-flex" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
        <img
          src="/videos/banner/logo-light.svg"
          alt="Chrysos VTP Luxe Project Logo"
          loading="eager"
          fetchPriority="high"
          height="100%"
          width="100%"
        />
      </div>
      {/* <h2 className="BannerTitleMain subTxt2">Baner Next, Mahalunge</h2> */}
      <div className="banner-slider" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <Swiper {...swiperSettings}>
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              {banner.video ? (
                <div className="banner_image video">
                  <video
                    aria-label="Chrysos VTP Luxe Showcase Video"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    // fetchpriority="high" 
                    poster={banner.video.poster}
                    src={banner.video.src}
                  ></video>
                  {/* <video loop muted autoPlay playsInline preload="auto" loading="eager" src={banner.video}></video> */}

                  {/* <div className="overlay_image">
                    <img src={banner.video.overlay} alt="ban txt" loading='lazy' height='100%' width='100%' />
                  </div> */}
                  

                  <div className="caption-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <h2 className="BannerTitleMain mainTitle">
                      {banner.title} <br />
                    </h2>
                    <h2 className="BannerTitleMain subTxt">
                      {banner?.subtitle}
                    </h2>
                    {/* <h2 className="BannerTitleMain subTxt">
                      {banner?.subtitle2}
                    </h2> */}
                  </div>
                </div>
              ) : (
                <div className="banner_image">
                  {index !== 0 ? (
                    // <a
                    //   href="https://www.vtpwhitebox.com/"
                    //   rel="noreferrer"
                    //   target="_blank"
                    // >
                    <img
                      src={banner.src}
                      fetchPriority="high"
                      alt={banner.alt}
                    />
                    // </a>
                  ) : (
                    <img
                      src={banner.src}
                      fetchPriority="high"
                      alt={banner.alt}
                    />
                  )}
                  <div className="caption-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <h2 className="BannerTitleMain mainTitle">
                      {banner.title} <br />
                    </h2>
                    <h2 className="BannerTitleMain subTxt">
                      {banner?.subtitle}
                    </h2>
                    {/* <h2 className="BannerTitleMain subTxt">
                      {banner?.subtitle2}
                    </h2> */}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
