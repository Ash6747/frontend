import { lazy, Suspense, useEffect, useState } from 'react';
// import ContactForm from "../../common/ContactForm";
const ContactForm = lazy(() => import("../../common/ContactForm"))
import './EnquireNow.css';
import SectionTitle from "../../common/SectionTitle";

const EnquireNow = ({ mapUrl }) => {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const [showBgImages, setShowBgImages] = useState(false);

    useEffect(() => {
        // Lazy-load iframe on scroll into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIframeLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const iframeContainer = document.getElementById("iframe-container");
        if (iframeContainer) observer.observe(iframeContainer);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Show background images only on medium and larger screens
        const handleResize = () => {
            setShowBgImages(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="form_wrapper" className="side-space section-space enquiry-section">

            <div className="row row-main justify-content-between align-items-center column-gap">
                <div className="col-lg-5 col-md-4 form_content" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <div className="title-wrapper">
                        <h2 className="sec_title small mx-auto">
                            All coming together as pune’s most selective expression of modern luxury
                        </h2>
                    </div>
                    <p className="sec_desc">
                        Expansive villas in the sky, designed across two expansive levels, are rare. Private elevators for each home are rarer still. Add double-height living, full-glass views, and three levels of leisure, and you begin to see why Chrysos is called ‘Never Before’.
                    </p>
                    {/* <div className="enq-frame" id="iframe-container">
                        {isIframeLoaded ? (
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: "0", borderRadius: 15 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <div className="iframe-placeholder">Loading Map...</div>
                        )}
                    </div> */}
                </div>
                <div className="col-lg-6 col-md-7 contact" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="form_details">
                        <div className="enquirynow_form">
                            <div className="title-wrapper">
                                <h2 className="sec_title small mx-auto">Enquire now</h2>
                            </div>
                            <Suspense >
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

EnquireNow.defaultProps = {
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2699382749624!2d73.9706815!3d18.5483664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e83d4d23a1%3A0xadb10722e71087b4!2sVTP%20Township%20Pegasus%20Homes%20-%20Kharadi%20Sales%20Office!5e1!3m2!1sen!2sin!4v1754978158829!5m2!1sen!2sin",
};

export default EnquireNow;