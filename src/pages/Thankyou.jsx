import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import VTPLuxeLogo from "../assets/images/general/VTPLuxeLogo";

const YTIcon = lazy(() => import("../assets/svg/YTIcon"));
const FBIcon = lazy(() => import("../assets/svg/FBIcon"));
const LinkedInicon = lazy(() => import("../assets/svg/LinkedInicon"));
const IgIcon = lazy(() => import("../assets/svg/IgIcon"));
const Mailcon = lazy(() => import("../assets/svg/Mailcon"));
const CallIcon = lazy(() => import("../assets/svg/CallIcon"));
const WhatsappIcon = lazy(() => import("../assets/svg/WhatsappIcon"));

const ThankYou = () => {
  const downloadBtn = useRef();
  const [thankyouMsg, setThankyouMsg] = useState({
    userName: "",
    Mobile: "",
    Email: "",
    directProgram: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const msg = JSON.parse(localStorage.getItem("formData"));
    if (!msg?.FirstName) {
      navigate("/");
      return;
    }
    if (msg?.FirstName) {
      setThankyouMsg({
        ...thankyouMsg,
        userName: msg.FirstName + " " + msg.LastName,
        Mobile: msg.CountryCode + " " + msg.Mobile,
        Email: msg.Email,
        directProgram: msg.DirectProgram || false,
      });
    }
    // new build requirement - auto download brochure after form submission

    const downloadBrochure = localStorage.getItem("downloadBrochure");
    if (downloadBrochure === "yes") {
      downloadBtn.current.click();
      localStorage.removeItem("downloadBrochure");
    }
  }, [navigate, thankyouMsg]);

  return (
    <Suspense fallback={null}>
      <>
        <Helmet>
          <title>VTP Chrysos - Thank You</title>
        </Helmet>
        <section id="thank-you-bg" className="bg-container">
          <div className="main-container">
            <div className="row justify-content-center align-items-center m-0">
              <div className="col-md-12 px-0">
                <div className="thankyou-logo">
                  <a href="/"
                    aria-label="Back to Home"
                  >
                    <VTPLuxeLogo />
                  </a>
                </div>
                {/* <a
                  style={{ opacity: "0", height: "0" }}
                  href={`/pdf/Chrysos_Brochure-Final.pdf`}
                  ref={downloadBtn}
                  download="Chrysos_Brochure-Final"
                >
                  Chrysos_Brochure-Final
                </a> */}
                <h1 className="text-center mt-2">Thank You</h1>
                {/* <div className="user-details">
                  <p>Full Name: {thankyouMsg?.userName}</p>
                  <p>Phone: {thankyouMsg?.Mobile}</p>
                  <p>Email: {thankyouMsg?.Email}</p>
                </div>
                <nav className="home">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" 
                      aria-label="Back to Home"
                      >Home</a>
                    </li>
                    <li className="breadcrumb-item active">Thank You</li>
                  </ol>
                </nav> */}
                <div className={`thankyou-card-outer ${thankyouMsg.directProgram ? "" : "no-direct"}`}>
                  <div className="row thankyou-card-row">
                    <div className="col-md-7 ps-0 pe-0">
                      <div className="thankyou-card-content thankyou-card-img">
                        {/* <img src="/images/Thankpage-FormImg.webp" alt="" /> */}
                        <picture>
                          <source
                            srcSet="/images/directProgram/VTP-direct-banner-mobile.webp"
                            media="(max-width: 552px)"
                            type="image/webp"
                          />
                          <source
                            srcSet="/images/directProgram/VTP-direct-banner.webp"
                            media="(min-width: 553px)"
                            type="image/webp"
                          />
                          <img
                            loading="lazy"
                            src="/images/directProgram/VTP-direct-banner.webp"
                            alt="Only Vtp Brand"
                            className="brand_onlyvtp_img"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="thankyou-card-content">
                        <div className="">
                          <p className="text-center"><span className="fw-bolder">Full Name :</span> <span>{thankyouMsg?.userName}</span></p>
                          <p className="text-center"><span className="fw-bolder">Phone :</span> <span>{thankyouMsg?.Mobile}</span></p>
                          <p className="text-center"><span className="fw-bolder">Email :</span> <span>{thankyouMsg?.Email}</span></p>
                          <nav className="home">
                            <ol className="breadcrumb justify-content-center mb-0">
                              <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                              </li>
                              <li className="breadcrumb-item active">Thank You</li>
                            </ol>
                          </nav>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="row social-foot-bg">
                    <div className="col-12 ps-0 pe-0">
                      <div className="social-foot">
                        <div className="row g-4 g">
                          <div className="col-xl-4 ps-0 pe-0">
                            <div className="d-flex justify-content-center gap-3 social-ico">
                              <a href="https://www.facebook.com/vtprealtybrandpage" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Facebook Page"><FBIcon /></a>

                              {/* <a href="https://twitter.com/vtprealty" target="_blank"><XIcon /></a> */}

                              <a href="https://www.youtube.com/channel/UCCp40i7hb73xE7LBqGBtP-Q" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty YouTube Channel"><YTIcon /></a>

                              <a href="https://in.linkedin.com/company/vtp-realty-official" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty LinkedIn Page"><LinkedInicon /></a>

                              <a href="https://www.instagram.com/vtprealty/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Instagram Profile"><IgIcon /></a>

                              <a href="https://api.whatsapp.com/send?phone=+917219312222&text=Hello" target="_blank" rel="noopener noreferrer" aria-label="Chat with VTP Realty on WhatsApp"><WhatsappIcon /></a>
                            </div>
                          </div>
                          <div className="col-xl-8 p-0">
                            <div className="d-flex gap-lg-4 gap-3 align-items-center justify-content-center flex-wrap">
                              <div className="d-flex justify-content-center gap-2 social-ico">
                                <CallIcon />
                                <a href="tel:07969292616" aria-label="Call VTP Realty at 07969292616">07969292616</a>
                              </div>
                              <div className="d-flex justify-content-center gap-2 social-ico">
                                <Mailcon />
                                <a href="mailto:career@vtpgroup.in" aria-label="Email HR at career@vtpgroup.in">career@vtpgroup.in</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe src="https://adgebra.co.in/clicktracker/conversion?p1=10211&p2=[order_Id]&p3=[product_Id]&p4=[cartvalue]&p5=[flag~custom_values]" width="0" height="0" frameborder="0"></iframe>
        </section>

        {thankyouMsg.directProgram && (
          <section id="terms-conditions" className="terms-conditions-sec side-space section-space pt-0">
            <div className="container">
              <div className="title-wrapper bottom-none center aos-init aos-animate mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="section-title m-auto">Terms and Conditions</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <ul className="terms-conditions-list">
                    <li>To safeguard your privacy, the VTP Realty team will not make any follow-up calls for 15 days from the date your lead is received.</li>
                    <li>All official communication regarding this offer will be shared only via WhatsApp and SMS from verified VTP Realty channels.</li>
                    <li>The VTP Direct Offer is valid for 15 days from the date the lead is received.</li>
                    <li>The site visit must be completed within 15 days, and the booking must be completed within 30 days from the lead date.</li>
                    <li>The offer is valid only if you visit the project site directly through the VTP Direct Program.</li>
                    <li>If you are contacted by any third-party agents or brokers claiming to represent VTP Realty and visit the site through them, this offer will stand invalid.</li>
                    <li>To avail the offer, you must share your exclusive offer code at the site office reception and ensure it is validated in the official VTP system.</li>
                    <li>This offer is exclusive to you and non-transferable to any other individual, including relatives or friends.</li>
                    <li>The VTP Direct Offer is applicable over and above all current ongoing offers.</li>
                    <li>It applies to the current pricing across all VTP Realty projects.</li>
                    <li>VTP Realty management reserves the right to modify, suspend, or withdraw this offer at any time, without prior notice or explanation.</li>
                    <li>Offer mentioned are applicable on selected VTP projects only.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    </Suspense>
  );
};

export default ThankYou;
