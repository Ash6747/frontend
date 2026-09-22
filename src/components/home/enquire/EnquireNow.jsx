import { lazy, Suspense } from 'react';
import Accordion from '../../common/accordion/Accordion';
const ContactForm = lazy(() => import("../../common/ContactForm"));
import './EnquireNow.css';
import StarIcon from '../../../assets/svg/StarIcon';

const faqData = [
    {
        num: "01",
        question: "What makes Chrysos Sky Villas truly 'Never Before'?",
        answer: "Expansive villas in the sky, designed across two expansive levels, are rare. Private elevators for each home are rarer still. Add double-height living, full-glass views, and three levels of leisure, and you begin to see why Chrysos is called ‘Never Before’."
    },
    {
        num: "02",
        question: "What configurations and unit layouts are offered?",
        answer: "Chrysos presents bespoke 4.5 & 5.5 BHK sky villas designed on our MLA (Maximum Livable Area) philosophy, featuring grand dual-level living, private terrace decks, and separate staff quarters."
    },
    {
        num: "03",
        question: "Where is Chrysos located and what is the connectivity?",
        answer: "Strategically situated in Kharadi, Pune, Chrysos provides seamless access to EON IT Park, World Trade Centre, Pune International Airport, reputed international schools, and premier healthcare facilities."
    },
    {
        num: "04",
        question: "What exclusive amenities and leisure facilities are included?",
        answer: "Residents enjoy three curated tiers of luxury amenities, including an infinity-edge rooftop pool, private clubhouse, wellness spa, temperature-controlled indoor gaming, and landscaped private sky gardens."
    },
    {
        num: "05",
        question: "What are the possession timelines and MahaRERA details?",
        answer: "Chrysos is registered under MahaRERA with transparent development timelines. For official registration certificates, floor plans, and flexible payment schedules, please submit an enquiry or connect with our sales team."
    }
];

const EnquireNow = () => {
    return (
        <section id="form_wrapper" className="side-space section-space enquiry-section">
            <div className="row row-main justify-content-between align-items-start column-gap">
                <div className="col-lg-6 col-md-12 form_content mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <div className="title-wrapper">
                        <h2 className="sub_title">
                            <StarIcon /> Good To Know
                        </h2>
                        <h2 className="sec_title">
                            All you need to know
                        </h2>
                    </div>
                    <Accordion
                        badgeText="GOOD TO KNOW"
                        title="All you need to know"
                        items={faqData}
                        accordionId="enquireFaqAccordion"
                        defaultOpenIndex={0}
                    />
                </div>

                <div className="col-lg-6 col-md-12 contact" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="form_details">
                        <div className="enquirynow_form">
                            <div className="title-wrapper">
                                <h2 className="sec_title mx-auto">Enquire now</h2>
                            </div>
                            <Suspense fallback={<div>Loading form...</div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnquireNow;