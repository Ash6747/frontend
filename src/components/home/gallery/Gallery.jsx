import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Gallery.css";

const Gallery = () => {
  const [currentText, setCurrentText] = useState("Wide green lawns");
  const [aosKey, setAosKey] = useState(0);

  const Details = [
    {
      id: 1,
      text: "Wide green lawns",
      src: "/images/BenchMark/converted/img10.webp",
      alt: "Benchmarks of VTP chrysos with top-class amenities and design features",
    },
    {
      id: 7,
      text: `Bird Eye Night`,
      src: "/images/BenchMark/converted/img6.webp",
      alt: "Benchmarks of VTP chrysos with top-class amenities and design features",
    },
    {
      id: 9,
      text: `Elevation Dawn`,
      src: "/images/BenchMark/converted/img8.webp",
      alt: "Benchmarks of VTP chrysos with top-class amenities and design features",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentText(Details[swiper.realIndex]?.text || "");
    setAosKey((prev) => prev + 1);
  };

  return (
    <section id="gallery" className="realbenchmark-section">
      <div className="strip-overlay side-space pe-0">
        <img
          src="/images/BenchMark/strip.png"
          alt="Decorative Strip"
          loading="lazy"
          height="100%"
          width="100%"
        />
        {/* <h2
          key={aosKey}
          className="sec_title gold"
          data-aos="zoom-in-up"
          dangerouslySetInnerHTML={{ __html: currentText }}
        /> */}
      </div>

      <div className="realbenchmark-swiper-wrapper">
        <Swiper
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="realbenchmark-swiper"
          onSlideChange={handleSlideChange}
          modules={[Autoplay, EffectFade]}
        >
          {Details.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="realbenchmark-image-wrapper">
                <img
                  src={img.src}
                  alt="Benchmark Slide"
                  className="realbenchmark-image"
                  loading="lazy"
                  height="100%"
                  width="100%"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-dark-overlay"></div>
      </div>
    </section>
  );
};

export default Gallery;
