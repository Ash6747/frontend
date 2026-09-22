import { LuMail as Mail } from "react-icons/lu";
import "./Footer.css";
import fetchSharedJson from "../../data/fetchSharedJson";

const FBIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YTIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1E150D" />
  </svg>
);

const LinkedInicon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const IgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);


const Footer = () => {
  const sharedData = fetchSharedJson.attributes;
  const copyright = sharedData?.metaData?.Copyright || "";
  const headOffice = sharedData?.metaData?.headOffice || "";
  const hr = sharedData?.metaData?.HR || "";

  const qrData = [{ src: "v2.webp", text: "VTP CHRYSOS - P52102459524" }];

  return (
    <>
      <footer className="footer-bottom side-space section-space">
        <div className="row justify-content-between qr-wrapper m-0">
          <div className="col-md-4 p-0">
            <ul className="footer_contact_ul">
              <li className="fc_li">
                <div className="d-flex gap-2 gap-xxl-2 gap-xl-2 gap-md-0 gap-lg-0 gap-sm-0">
                  <span className="fc_title">Sales : </span>
                  <div className="d-flex align-items-center">
                    <a href="tel:07969292616" aria-label="Call sales team at 07969292616"> 07969292616</a>
                  </div>
                </div>
              </li>
              {headOffice && (
                <li className="fc_li">
                  <div className="d-flex align-items-center gap-xxl-2 gap-xl-2 gap-md-0 gap-lg-0 gap-sm-0">
                    <span className="fc_title">Head Office :</span>
                    <div className="d-flex align-items-center">
                      {" "}
                      <a href={`tel:${headOffice?.phone}`} aria-label={`Call Head Office at ${headOffice?.phone}`}>
                        {" "}
                        {headOffice?.phone}
                      </a>
                    </div>
                  </div>
                  <span className="fc_subtitle">{headOffice?.description}</span>
                </li>
              )}
              <div>
                {hr && (
                  <li className="fc_li">
                    <div className="d-flex gap-xxl-2 gap-xl-2 gap-md-0 gap-lg-0 gap-sm-0">
                      <span className="fc_title">HR: </span>
                      <div>
                        <a href={`tel:${hr?.Phone1}`} aria-label={`Call HR at ${hr?.Phone1}`}>{hr?.Phone1}</a> /
                        <a href={`tel:${hr?.Phone2}`} aria-label={`Call HR alternate line at ${hr?.Phone2}`}> {hr?.Phone2}</a>
                      </div>
                    </div>
                  </li>
                )}
                {hr && (
                  <li className="fc_li">
                    <div className="d-flex gap-2">
                      <div>
                        <a href={`mailto:${hr?.email}`} aria-label={`Send email to HR at ${hr?.email}`} className="d-inline-flex align-items-center">
                          <Mail size={16} className="mail me-1" />{" "}
                          {hr?.email}
                        </a>
                      </div>
                    </div>
                  </li>
                )}
              </div>
              <li className="fc_li">
                <div className="d-flex justify-content-end gap-3 social-ico">
                  <a href="https://www.facebook.com/vtprealtybrandpage" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Facebook Page"><FBIcon /></a>

                  <a href="https://www.youtube.com/channel/UCCp40i7hb73xE7LBqGBtP-Q" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty YouTube Channel"><YTIcon /></a>

                  <a href="https://www.linkedin.com/company/3631882/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty LinkedIn Page"><LinkedInicon /></a>

                  <a href="https://www.instagram.com/vtprealty/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Instagram Profile"><IgIcon /></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-8 p-0">
          </div>
        </div>

        <hr />

        <div className="footer-bottom-text-wrapper">
          <p className="footer-bottom-text border-next">
            © Copyright {new Date().getFullYear()} {copyright}
          </p>
          <p className="footer-bottom-text">
            <a
              href="https://www.vtprealty.in/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View VTP Realty Privacy Policy"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#disclaimerModal"
              aria-label="Open Disclaimer Modal"
            >
              Disclaimer
            </a>
          </p>
        </div>
      </footer>
      {/* <ScrollIndicator /> */}
    </>
  );
};

export default Footer;
