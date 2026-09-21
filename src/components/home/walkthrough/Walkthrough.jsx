import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Walkthrough.css";
import SectionTitle from "../../common/SectionTitle";

const Walkthrough = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      iframe:
        "https://www.youtube.com/embed/RQAuj88t44I?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3",
      thumbnail: "https://i.ytimg.com/vi/RQAuj88t44I/maxresdefault.jpg",
      alt: "Walkthrough video thumbnail of VTP Chrysos township project",
    },
    {
      id: 2,
      iframe:
        "https://www.youtube.com/embed/Lnb7ad1g3oQ?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3",
      thumbnail: "https://i.ytimg.com/vi/Lnb7ad1g3oQ/maxresdefault.jpg",
      alt: "Drone view of VTP Codename Pegasus township in Kharadi Pune",
    },
    {
      id: 3,
      iframe: "https://www.youtube.com/embed/kSJNXgJ6s_8",
      thumbnail: "https://i.ytimg.com/vi_webp/kSJNXgJ6s_8/sddefault.webp",
      alt: "Drone view of VTP Leonara",
    },
    {
      id: 4,
      iframe: "https://www.youtube.com/embed/wmmQLsooHm8",
      thumbnail: "https://i.ytimg.com/vi_webp/wmmQLsooHm8/sddefault.webp",
      alt: "Drone view of VTP Belair",
    },
  ];

  return (
    <section id="shot" className="shot walkthrough side-space section-space">
      <div
        className="title-wrapper center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <SectionTitle text="3D Walkthrough Vs Actual shot on site" />
      </div>

      <div className="walkthrough-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          onSlideChange={() => setActiveVideo(null)}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="video-wrapper"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className="frame-wrapper youtube-placeholder"
                  role="button"
                  onClick={() => setActiveVideo(video.id)}
                >
                  {activeVideo === video.id ? (
                    <iframe
                      title={`video-${video.id}`}
                      height="315"
                      width="100%"
                      src={video.iframe}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="youtube-placeholder">
                      <img
                        src={video.thumbnail}
                        alt={video.alt}
                        loading="lazy"
                      />
                      <span className="play-button" aria-hidden="true">
                        <svg width="65px" height="65px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FF0000">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#FF0000   "> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g>
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-nav">
          <button className="custom-prev" aria-label="Previous walkthrough slide">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next" aria-label="Next walkthrough slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
