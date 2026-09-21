import { lazy, Suspense, useRef, useEffect } from "react";
import { Modal } from "bootstrap";
import WhatsApp from "../../assets/images/general/whatsapp.webp";

const ContactForm = lazy(() => import("./ContactForm"));
const CallMob = lazy(() => import("../../assets/images/footer/CallMob"));
const Connect = lazy(() => import("../../assets/images/footer/Connect"));
const WhatsAppMob = lazy(() => import("../../assets/images/footer/WhatsAppMob"));

const Modals = ({ data }) => {
  const thankYou = useRef();
  const hasShown = useRef(false); // prevent multiple triggers

  useEffect(() => {
    const handleMouseLeave = (e) => {
      const modalElement = document.getElementById("enquirynowmodal");

      // ✅ check if modal exists AND already open
      const isModalOpen = modalElement?.classList.contains("show");

      if (e.clientY <= 0 && !hasShown.current && !isModalOpen) {
        hasShown.current = true;

        if (modalElement) {
          const modal = new Modal(modalElement);
          modal.show();
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <section className="modals-wrapper">
      <div className="float-button-desktop">
        <a
          className="whatsapp-icon"
          target="_blank"
          href={data?.whatsappURL}
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <img
            src={WhatsApp}
            alt="Chat on WhatsApp"
            loading="lazy"
            height={40}
            width={40}
          />
        </a>
      </div>

      {/* Disclaimer Modal */}
      <div className="modal fade" id="disclaimerModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Disclaimer</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close disclaimer modal"
              ></button>
            </div>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{
                __html: data?.Disclaimer || "",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <div className="modal fade" id="termsModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Terms and Conditions</h5>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#enquirynowmodal"
                className="text-decoration-underline  bold-text"
                aria-label="Close Terms and Conditions modal"
              >
                <strong className="clsedPopUp">x</strong>
              </a>
            </div>
            <div
              className="modal-body"
            >
              <ul>
                <li>
                  To protect your privacy and peace of mind, the VTP Direct
                  Program offers a no–follow-up experience. Customers enrolled
                  in the program will receive an additional discount over and
                  above all ongoing offers at VTP Realty. You must obtain your
                  exclusive coupon code and share it only at the project site
                  office reception. The code must be successfully validated in
                  the official VTP system to activate your benefits.
                </li>
                <li>
                  To avail the offer benefits, the site visit must be completed
                  within 15 days from the date the lead is received.
                  Registration and booking for the selected project must be
                  completed within 30 days from the date of the site visit.
                </li>
                <li>
                  If the VTP Direct site visit is not completed within 15 days
                  from registration, the offer will no longer remain valid.
                  After this period, the VTP Realty presales team may contact
                  you for regular project updates and assistance.
                </li>
                <li>
                  This offer is valid only for customers visiting the project
                  site directly under the VTP Direct Program.
                </li>
                <li>
                  If you have already visited any VTP Realty project sales
                  office with a channel partner, you cannot opt for the VTP
                  Direct Program for 30 days from the date of your last visit.
                </li>
                <li>
                  Do not share your Unique ID Code with anyone. If you are
                  contacted by any third-party channel partners or agents
                  claiming to represent VTP Realty and you choose to visit
                  through them, this offer will be considered invalid.
                </li>
                <li>
                  All official communication related to this program will be
                  sent only through verified VTP Realty Email, WhatsApp, and SMS
                  channels.
                </li>
                <li>
                  This offer is non-transferable and valid only for the customer
                  to whom it has been issued. It cannot be assigned to any other
                  individual, including relatives or friends. The VTP Direct
                  Program benefits cannot be clubbed with Loyalty Benefits and
                  Referral Programs.
                </li>
                <li>
                  VTP Realty management reserves the right to modify, withdraw,
                  or discontinue any or all offers at its sole discretion
                  without prior notice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade enquirynow-modal"
        id="enquirynowmodal"
        tabIndex="-1"
        aria-labelledby="enquirynowmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img
              className="project-contact-ban"
              src="/videos/banner/ban-1.webp"
              alt="Chrysos VTP Luxe Banner Animation"
              loading="lazy"
            />
            <button
              type="button"
              className="btn-close modal-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close enquiry modal"
              ref={thankYou}
            ></button>
            <div className="modal-body">
              <ContactForm closePopup={thankYou} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div className="mobile-btns">
        <ul className="mob-foot-list">
          <li className="mob-foot-li">
            <a
              className="bottom-btn"
              href="tel:07969292608"
              aria-label="Call sales team at 07969292608"
            >
              <Suspense fallback={null}>
                <CallMob />
              </Suspense>
            </a>
          </li>
          <li className="mob-foot-li">
            <button
              className="bottom-btn bottom-btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enquirynowmodal"
              aria-label="Open Get Quote form modal"
            >
              GET QUOTE
            </button>
          </li>
          <li className="mob-foot-li">
            <a
              className="whatsapp-logo bottom-btn"
              target="_blank"
              href={data?.whatsappURL}
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <span>
                <Suspense fallback={null}>
                  <WhatsAppMob />
                </Suspense>
              </span>
            </a>
          </li>
          <li className="mob-foot-li">
            <a
              className="pre-con"
              target="_blank"
              href="#/"
              rel="noopener noreferrer"
              aria-label="Open Premium Connect section"
            >
              <Suspense fallback={null}>
                <Connect />
              </Suspense>
              <span>
                <b className="d-block">PREMIUM</b>
                CONNECT
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* <PopupModal /> */}
    </section>
  );
};

export default Modals;
