import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/home/banner/Banner";
import Header from "../layout/header/Header";
import fetchSharedJson from "../data/fetchSharedJson";

const Overview = lazy(() => import("../components/home/overview/Overview"));
const Overview2 = lazy(() => import("../components/home/overview/Overview2"));
const Highlights = lazy(() => import("../components/home/highlights/Highlights"));
const UnitPlans = lazy(() => import("../components/home/unit-plans/UnitPlans"));
const AmenitiesNew = lazy(() => import("../components/home/amenities/AmenitiesNew"));
// const Location = lazy(() => import("../components/home/location/Location"));
const AboutVTP = lazy(() => import("../components/home/about/AboutVTP"));
const Philosophy = lazy(() => import("../components/home/philosophy/Philosophy"));
const EnquireNow = lazy(() => import("../components/home/enquire/EnquireNow"));
const Modals = lazy(() => import("../components/common/Modals"));
const PopupModal = lazy(() => import("../components/common/PopUp"));

const LazySection = ({ children, minHeight = 1 }) => {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad || !sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px' }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={sectionRef} style={!shouldLoad ? { minHeight } : undefined}>
      {shouldLoad && (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

const Home = () => {

  const sharedData = fetchSharedJson.attributes;

  const about_data = sharedData?.AboutContent || "";
  const philosophy_data = sharedData?.brandPhilosophy || "";
  const offer_data = sharedData?.offerPopup || "";
  const meta_data = sharedData?.metaData || "";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, [sharedData]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      infinite: true,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      Image: { zoom: true, },
      Thumbs: { autoStart: true, },
    });

    return () => { Fancybox.destroy(); };
  }, []);

  return (
    <>
      <section id="home">
        <Header />
        <Banner />

        <LazySection minHeight="600px">
          <Overview />
        </LazySection>

        <LazySection minHeight="500px">
          <Overview2 />
        </LazySection>

        <LazySection minHeight="600px">
          <Highlights />
        </LazySection>

        <LazySection minHeight="600px">
          <UnitPlans />
        </LazySection>

        <LazySection minHeight="600px">
          <AmenitiesNew />
        </LazySection>

        {/* <LazySection minHeight="600px">
          <Location />
        </LazySection> */}

        <LazySection minHeight="500px">
          <AboutVTP data={about_data} />
        </LazySection>

        <LazySection minHeight="500px">
          <Philosophy data={philosophy_data} />
        </LazySection>

        <LazySection minHeight="400px">
          <EnquireNow />
        </LazySection>

        <LazySection minHeight="0px">
          <Modals data={meta_data} />
        </LazySection>

        {/* {offer_data?.enableSection && (
          <LazySection minHeight="0px">
            <PopupModal data={offer_data?.OfferImage} />
          </LazySection>
        )} */}
      </section>
    </>
  );
};

export default Home;
