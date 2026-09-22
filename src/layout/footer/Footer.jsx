import { FaWhatsapp } from "react-icons/fa6";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
import "./Footer.css";
import fetchSharedJson from "../../data/fetchSharedJson";

const Footer = () => {
  const sharedData = fetchSharedJson.attributes;
  const copyright = sharedData?.metaData?.Copyright || "Purple Corp. All Rights Reserved.";
  const hr = sharedData?.metaData?.HR;
  const headOffice = sharedData?.metaData?.headOffice;
  const whatsappUrl = sharedData?.metaData?.whatsappURL || "https://api.whatsapp.com/send?phone=+917219312222&text=Hello";

  return (
    <footer className="footer-wrapper">
      {/* 1. Top Gold Disclaimer Strip */}
      <div className="footer-disclaimer-strip side-space">
        <div className="disclaimer-strip-inner">
          <span className="disclaimer-pill">● DISCLAIMER</span>
          <div className="disclaimer-marquee">
            <div className="disclaimer-track">
              <div className="disclaimer-group">
                <span className="disclaimer-msg">carpet areas as defined under RERA</span>
                <span className="disclaimer-sep">•</span>
                <span className="disclaimer-msg">Prices are indicative, exclusive of taxes and subject to revision</span>
                <span className="disclaimer-sep">•</span>
                <span className="disclaimer-msg">Distances to landmarks are approximate, from public map data</span>
                <span className="disclaimer-sep">•</span>
              </div>
              <div className="disclaimer-group" aria-hidden="true">
                <span className="disclaimer-msg">carpet areas as defined under RERA</span>
                <span className="disclaimer-sep">•</span>
                <span className="disclaimer-msg">Prices are indicative, exclusive of taxes and subject to revision</span>
                <span className="disclaimer-sep">•</span>
                <span className="disclaimer-msg">Distances to landmarks are approximate, from public map data</span>
                <span className="disclaimer-sep">•</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Purple MahaRERA & Brand Hero Band */}
      <div className="footer-rera-band side-space">
        <div className="row justify-content-between align-items-center gy-4">
          <div className="col-lg-7 col-md-7 col-12">
            <span className="rera-brand-tag">RAAYA</span>
            <h3 className="rera-heading">An address waiting to become your story.</h3>
            <p className="rera-desc">
              All Purple Corp projects are registered under MahaRERA and listed on{" "}
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rera-link"
              >
                maharera.maharashtra.gov.in
              </a>
              . Verify project details, approvals and timelines before booking.
            </p>
          </div>

          <div className="col-lg-5 col-md-5 col-12 d-flex justify-content-md-end justify-content-start">
            <div className="rera-qr-box d-flex align-items-center gap-3">
              <div className="rera-qr-img-wrapper">
                <img
                  src="/images/footer/v2.webp"
                  alt="MahaRERA QR"
                  className="rera-qr-img"
                  width="85"
                  height="85"
                />
              </div>
              <div className="rera-qr-details">
                <span className="qr-scan-badge">SCAN TO VERIFY</span>
                <p className="qr-proj-name">The Raaya at Park Street</p>
                <p className="qr-maharera-label">M A H A R E R A</p>
                <p className="qr-reg-num">PR1260002502741</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Contact & Social & Copyright Section */}
      <div className="footer-contact-section side-space">
        <div className="row justify-content-between align-items-start gy-4">
          {/* Left Column: Contact With Our Team */}
          <div className="col-lg-9 col-md-12">
            <h4 className="footer-col-title">Contact With Our Team</h4>
            <div className="row g-3 g-md-4 mt-2">
              <div className="col-6 col-md-3">
                <div className="contact-block">
                  <span className="contact-label">SALES</span>
                  <a
                    href="tel:08065206019"
                    className="contact-val"
                    aria-label="Call sales team at 080 6520 6019"
                  >
                    080 6520 6019
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="contact-block">
                  <span className="contact-label">HEAD OFFICE</span>
                  <a
                    href={`tel:${headOffice?.phone || "02066850000"}`}
                    className="contact-val"
                    aria-label="Call head office at 020 6685 0000"
                  >
                    020 6685 0000
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="contact-block">
                  <span className="contact-label">HR</span>
                  <div className="contact-val">
                    <a
                      href={`tel:${hr?.Phone1 || "8975004886"}`}
                      aria-label="Call HR line 1"
                    >
                      897 500 4886
                    </a>{" "}
                    /{" "}
                    <a
                      href={`tel:${hr?.Phone2 || "8378962303"}`}
                      aria-label="Call HR line 2"
                    >
                      837 896 2303
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="contact-block">
                  <span className="contact-label">EMAIL</span>
                  <a
                    href="mailto:career@purplecorp.in"
                    className="contact-val"
                    aria-label="Send email to career@purplecorp.in"
                  >
                    career@purplecorp.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Connect With Us */}
          <div className="col-lg-3 col-md-12 d-flex flex-column align-items-lg-end">
            <div className="connect-wrapper">
              <h4 className="footer-col-title">Connect With Us</h4>
              <div className="title-accent-line"></div>
              <div className="social-pills-row d-flex gap-2 gap-sm-3 mt-3">
                <a
                  href="https://www.instagram.com/vtprealty/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Visit Instagram"
                >
                  <LuInstagram size={17} />
                </a>
                <a
                  href="https://www.facebook.com/vtprealtybrandpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Visit Facebook"
                >
                  <LuFacebook size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/company/3631882/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Visit LinkedIn"
                >
                  <LuLinkedin size={16} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCCp40i7hb73xE7LBqGBtP-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Visit YouTube"
                >
                  <LuYoutube size={17} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                  aria-label="Contact on WhatsApp"
                >
                  <FaWhatsapp size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-bottom-divider my-3" />

        {/* Bottom Bar: Copyright & Links */}
        <div className="row justify-content-between align-items-center py-2 gy-2">
          <div className="col-md-6 col-12 text-center text-md-start">
            <p className="copyright-line mb-0">
              © {new Date().getFullYear()} {copyright}
            </p>
          </div>
          <div className="col-md-6 col-12 text-center text-md-end">
            <div className="footer-legal-links">
              <a
                href="https://www.vtprealty.in/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-link"
              >
                Privacy Policy
              </a>
              <span className="legal-sep mx-2">|</span>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#disclaimerModal"
                className="legal-link"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
