import { lazy, Suspense } from "react";
import Mail from "../../assets/images/footer/Mail";
import "./Footer.css";
import fetchSharedJson from "../../data/fetchSharedJson";

const IgIcon = lazy(() => import("../../assets/svg/IgIcon"));
const LinkedInicon = lazy(() => import("../../assets/svg/LinkedInicon"));
const YTIcon = lazy(() => import("../../assets/svg/YTIcon"));
const FBIcon = lazy(() => import("../../assets/svg/FBIcon"));


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
                        <a href={`mailto:${hr?.email}`} aria-label={`Send email to HR at ${hr?.email}`}>
                          <Mail className="text-decoration-underline mail" />{" "}
                          {hr?.email}
                        </a>
                      </div>
                    </div>
                  </li>
                )}
              </div>
              <li className="fc_li">
                <Suspense fallback={null}>
                  <div className="d-flex justify-content-end gap-3 social-ico">
                    <a href="https://www.facebook.com/vtprealtybrandpage" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Facebook Page"><FBIcon /></a>

                    <a href="https://www.youtube.com/channel/UCCp40i7hb73xE7LBqGBtP-Q" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty YouTube Channel"><YTIcon /></a>

                    <a href="https://www.linkedin.com/company/3631882/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty LinkedIn Page"><LinkedInicon /></a>

                    <a href="https://www.instagram.com/vtprealty/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Visit VTP Realty Instagram Profile"><IgIcon /></a>
                  </div>
                </Suspense>
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
