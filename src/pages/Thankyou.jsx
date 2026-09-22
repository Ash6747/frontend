import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { LuMail as Mail, LuPhone as Phone } from "react-icons/lu";

const FBIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YTIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#a2712f" />
  </svg>
);

const LinkedInicon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const IgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.02.79.81-2.95-.19-.3A8.2 8.2 0 0 1 3.8 11.9c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.3z" />
  </svg>
);

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
                    <img src="/images/newhero/VTP-Chrysos.svg" alt="VTP Chrysos" height="70" />
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
                                <Phone size={20} color="#fff" />
                                <a href="tel:07969292616" aria-label="Call VTP Realty at 07969292616">07969292616</a>
                              </div>
                              <div className="d-flex justify-content-center gap-2 social-ico">
                                <Mail size={20} color="#fff" />
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
          <iframe src="https://adgebra.co.in/clicktracker/conversion?p1=10211&p2=[order_Id]&p3=[product_Id]&p4=[cartvalue]&p5=[flag~custom_values]" width="0" height="0" frameBorder="0"></iframe>
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
