import { useState, lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CountryCodes from "../../data/CountryCodes";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import parsePhoneNumberFromString from "libphonenumber-js";
import Widget from "./TurnstileWidget";
import { dialCodeToCountryISO } from "../../data/DialCodes";
// import top from "../../assets/images/enquiry/top.svg";
// import bottom from "../../assets/images/enquiry/bottom.svg";

// eslint-disable-next-line no-unused-vars
const ContactForm = ({ onClick, closePopup }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // setShowForm(true);
  };

  const handleBack = () => {
    // go back but keep selection
    setShowForm(showForm ? false : true);
  };

  const searchParams = new URLSearchParams(location.search);
  // eslint-disable-next-line no-unused-vars
  const [otherInfo, SetOtherInfo] = useState({
    gclid: searchParams.get("gclid") || "",
    sfcid: searchParams.get("sfcid") || "",
    sfid: searchParams.get("sfid") || "",
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_term: searchParams.get("utm_term") || "",
    utm_device: searchParams.get("utm_device") || "",
    gad_source: searchParams.get("gad_source") || "",
    fbclid: searchParams.get("fbclid") || "",
    sk_referrer: searchParams.get("sk_referrer") || "",
  });

  const [captchaValidated, setCaptchaValidated] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const projectData = {
    "CHRYSOS EAST": {
      project_text: "CHRYSOS EAST - Kharadi, Pune",
      project_name: "Pegasus Luxe",
      project_location: "Kharadi, Pune",
      sfid: '701fv00000CG2nC',
    },
    "CHRYSOS WEST": {
      project_text: "CHRYSOS WEST - Mahalunge, Pune",
      project_name: "Bluewater Luxe",
      project_location: "Mahalunge, Pune",
      sfid: '701fv00000CGCD0',
    },
  };


  const getValidationSchema = () =>
    Yup.object().shape({
      first_name: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "Letters only please")
        .required("First name is required!"),
      last_name: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "Letters only please")
        .required("Last name is required!"),
      mobile: Yup.string()
        .required("Mobile number is required!")
        .test("is-valid-mobile", "Invalid phone number", function (value) {
          const { country_code } = this.parent;

          if (!value) return false;
          if (value.startsWith("12345")) return false;
          if (country_code === "+91") {
            const indianMobilePattern = /^[6-9]\d{9}$/;
            if (!indianMobilePattern.test(value)) return false;
            if (/^(\d)\1{9}$/.test(value)) return false;
          }

          const countryISO = dialCodeToCountryISO[country_code];
          if (!countryISO) return false;

          const phoneNumber = parsePhoneNumberFromString(value, countryISO);
          return phoneNumber ? phoneNumber.isValid() : false;
        }),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      country_code: Yup.string().required("Country code is required!"),
      term_condition: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Acceptance of terms is required!"),
      ads: Yup.boolean(),
      project_select: Yup.string().required("Please select a project"),
    });

  const getClientIp = async () => {
    try {
      const res = await axios.get("https://api64.ipify.org?format=json");
      return res.data.ip;
    } catch (err) {
      return `IP not found - ${err}`;
    }
  };

  // Get cookie value by name
  function getCookie(name) {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) return decodeURIComponent(match[2]);
    return null;
  }

  const simplifiedConsent = async () => {
    const cookieStr = getCookie("vtp_cookie");
    let cookie = {};
    try {
      cookie = cookieStr ? JSON.parse(cookieStr) : {};
    } catch (err) {
      console.warn("Failed to parse cookie:", err);
      cookie = {};
    }
    // 

    const customCookie = {
      ads: false,
      analytics: false,
      functionality: false,
      necessary: true,
      security: false,
      location: false,
      clientIp: await getClientIp(),
      timestamp: Date.now(),
    };

    if (cookie.categories && Array.isArray(cookie.categories)) {
      cookie.categories.forEach((category) => {
        customCookie[category] = true;
      });
    }

    return customCookie;
  };

  const handlerSubmit = async (formVal) => {
    if (!captchaValidated) {
      toast.error("Please complete the CAPTCHA to proceed.");
      return;
    }

    // let CampaignID = "7015j000000Pub1";
    // let secondary_source = "Google Call";

    // if (formVal.utm_source === "facebook") {
    //   CampaignID = "7015j000000PukD";
    //   secondary_source = formVal.utm_source;
    // }

    // if (
    //   formVal.utm_source === "facebook" &&
    //   formVal.utm_campaign === "facebook-altitude"
    // ) {
    //   CampaignID = "7015j000000PukD";
    //   secondary_source = formVal.utm_source;
    // }
    // if (formVal.utm_source === "linkedin") {
    //   CampaignID = "7015j000000Punh";
    //   secondary_source = formVal.utm_source;
    // }
    // if (formVal.sfid) {
    //   CampaignID = formVal.sfid;
    //   secondary_source = formVal.utm_source;
    // }

    // if (formVal.sk_referrer === "international") {
    //   if (formVal.utm_source === "google") {
    //     CampaignID = "7015j000000Puaw";
    //   }
    //   if (formVal.utm_source === "facebook") {
    //     CampaignID = "7015j000000Puk8";
    //   }
    //   if (formVal.utm_source === "linkedin") {
    //     CampaignID = "7015j000000Punr";
    //   }
    //   secondary_source = formVal.utm_source;
    // }

    // if (formVal.sk_referrer === "rom") {
    //   if (formVal.utm_source === "google") {
    //     CampaignID = "7015j000000Puey";
    //   }
    //   if (formVal.utm_source === "facebook") {
    //     CampaignID = "7015j000000Puk3";
    //   }
    //   if (formVal.utm_source === "linkedin") {
    //     CampaignID = "7015j000000Puo0";
    //   }
    //   secondary_source = formVal.utm_source;
    // }

    // let CampaignNewID = "";
    // if (formVal.utm_source !== "google") {
    //   CampaignNewID = CampaignID;
    // }
    const project = projectData[formVal.project_select]

    const formData = {
      formData: {
        FirstName: formVal.first_name,
        LastName: formVal.last_name,
        Email: formVal.email,
        ProjectName: formVal.project_name,
        SubProjectName: formVal.project_select,
        Company: "",
        CampaignId: project?.sfid,
        PrimarySource: "Digital",
        SecondarySource: "Google",
        UtmCampaign: formVal.utm_campaign,
        UtmMedium: formVal.utm_medium,
        UtmSource: formVal.utm_source,
        UtmDevice: formVal.utm_device,
        UtmTerm: formVal.utm_term,
        GADsource: formVal.gad_source,
        FBCLID: formVal.fbclid,
        CountryCode: formVal.country_code,
        Mobile: formVal.mobile,
        WhatsappConsent: "TRUE",
        CallConsent: "TRUE",
        RCSConsent: "TRUE",
        SMSConsent: "TRUE",
        GCLID: formVal.gclid,
        Comment: " ",
        captchaToken,
        CookieConsent: await simplifiedConsent(),
        Testing: "False",
        DirectProgram: selectedOption === "directProgram" ? true : false,
        IsPhoneOptOut: "",
        couponCode: "",
        DirectProgram_c: selectedOption === "directProgram" ? true : false,
        IsPhoneOptOut_c: "",
        CouponCode_c: "",
      },
    };

    const loadingToast = toast.loading("Loading...", {
      position: toast.POSITION.TOP_RIGHT,
    });

    const config = {
      method: "post",
      url: `${import.meta.env.VITE_APP_BASE_URL}/salesforce/add`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    // localStorage.setItem("formData", JSON.stringify(formData.formData));

    // axios.post(
    //   `${import.meta.env.VITE_APP_BASE_URL}/salesforce/add`,
    //   formData
    // ).catch(() => {
    // });

    // if (closePopup) closePopup.current.click();
    // navigate("/thank-you");

    try {
      const response = await axios(config);
      toast.dismiss(loadingToast);
      let downloadBrochure = "";
      if (closePopup) {
        downloadBrochure = localStorage.getItem("downloadBrochure");
        closePopup.current.click();
      }

      if (response.data.status === true) {
        localStorage.setItem("downloadBrochure", downloadBrochure);
        localStorage.setItem("formData", JSON.stringify(formData.formData));
        if (closePopup) {
          closePopup.current.click();
        }
        navigate("/thank-you");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Request failed!", error);

      const clientIp = await getClientIp();

      await axios.post(`${import.meta.env.VITE_APP_SS_URL}/lead/add`, {
        websiteStatus: 0,
        apiStatus: null,
        message: error.message,
        domainName: window.location.origin,
        ipAddress: clientIp,
      });
    }
  };

  const handleCaptchaSuccess = (token) => {
    setCaptchaToken(token);
    setCaptchaValidated(true);
  };

  const handleCaptchaError = () => {
    setCaptchaValidated(false);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    country_code: "+91",
    mobile: "",
    email: "",
    term_condition: true,
    ads: true,
    gclid: otherInfo.gclid,
    sfcid: otherInfo.sfcid,
    sfid: otherInfo.sfid,
    utm_source: otherInfo.utm_source,
    utm_medium: otherInfo.utm_medium,
    utm_campaign: otherInfo.utm_campaign,
    utm_device: otherInfo.utm_device,
    utm_term: otherInfo.utm_term,
    gad_source: otherInfo.gad_source,
    fbclid: otherInfo.fbclid,
    sk_referrer: otherInfo.sk_referrer,
    download_brochure: "",
    project_select: "",
    project_name: "",
    subproject_name: "",
  };

  return (
    <div className="lead-section">
      {/* --- Selection Checkboxes --- */}
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await handlerSubmit(values);
          } catch (error) {
            console.error("Form submission error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => {
          return (
            <>
              {!showForm ?
                <div className="option-selector mb-4">
                  <div className="options-list">
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        id="directProgram"
                        checked={selectedOption === "directProgram"}
                        onChange={() => handleOptionSelect("directProgram")}
                        className="form-check-input"
                      />
                      <label htmlFor="directProgram" className="form-check-label">
                        {/* Join the <strong> VTP Direct Program </strong> for a no follow up experience! Get your exclusive coupon code for exciting offers and share it during your visit to our project site office. <strong>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#termsModal"
                              className="text-decoration-underline  bold-text"
                            >
                              <strong>T & C Apply</strong>
                            </a>
                          </strong> */}

                        To protect your privacy and peace of mind, the <strong> VTP Direct Program </strong> offers a no-follow-up experience. Customers enrolled in the program will receive an <strong> additional discount over and above all ongoing offers </strong> at VTP Realty. You will get exclusive coupon code after form submission. Share it only at the project site office reception. <strong>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#termsModal"
                            className="text-decoration-underline  bold-text"
                          >
                            <strong>Program Guidelines</strong>
                          </a>
                        </strong>
                      </label>
                    </div>

                    <h5 className="my-2 text-center">OR</h5>

                    <div className="form-check d-flex align-items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        id="assistPresales"
                        checked={selectedOption === "assistPresales"}
                        onChange={() => handleOptionSelect("assistPresales")}
                        className="form-check-input"
                      />
                      <label htmlFor="assistPresales" className="form-check-label">
                        Would you like our Presales team to reach out over a call and assist you with more details?
                      </label>
                    </div>
                  </div>

                  <button type="button" className="page-btn primary nextbtn" onClick={handleBack} disabled={!selectedOption}>
                    <span className="vtp-btn-text custm-btn">
                      Next <ArrowRight size={16} />
                    </span>
                  </button>

                </div>
                :
                (
                  <>
                    {/* Back Button */}
                    <button
                      type="button"
                      className="page-btn btn-outline-gold mb-3 back-btn"
                      onClick={handleBack}
                    >
                      ←
                    </button>

                    <Form id="contact_form">
                      <div className="row">
                        <div className="col-md-6 col-12 mb-3">
                          <Field type="hidden" id="gclid" name="gclid" />
                          <Field type="hidden" id="sfcid" name="sfcid" />
                          <Field type="hidden" id="sfid" name="sfid" />
                          <Field type="hidden" id="utm_source" name="utm_source" />
                          <Field type="hidden" id="utm_medium" name="utm_medium" />
                          <Field type="hidden" id="utm_campaign" name="utm_campaign" />
                          <Field type="hidden" id="utm_device" name="utm_device" />
                          <Field type="hidden" id="utm_term" name="utm_term" />
                          <Field type="hidden" id="gad_source" name="gad_source" />
                          <Field type="hidden" id="fbclid" name="fbclid" />
                          <Field type="hidden" id="sk_referrer" name="sk_referrer" />
                          <Field type="hidden" name="project_name" />
                          <Field type="hidden" name="subproject_name" />

                          <Field
                            type="hidden"
                            id="download_brochure"
                            name="download_brochure"
                          />

                          <Field
                            type="text"
                            id="first_name"
                            name="first_name"
                            className="form-control form-field custom-input"
                            placeholder="First Name*"
                          />
                          <ErrorMessage
                            name="first_name"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-md-6 col-12 mb-3 ">
                          <Field
                            type="text"
                            id="last_name"
                            name="last_name"
                            className="form-control form-field custom-input"
                            placeholder="Last Name*"
                          />
                          <ErrorMessage
                            name="last_name"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-md-12 col-12 mb-3">
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-field custom-input"
                            placeholder="Email*"
                          />
                          <ErrorMessage name="email" component="span" className="error" />
                        </div>
                        <div className="col-md-5 col-4 mb-3 pe-0">
                          <CountryCodes />
                        </div>
                        <div className="col-md-7 col-8 mb-3 pl-0">
                          <Field
                            type="text"
                            id="mobile"
                            name="mobile"
                            className="form-control form-field custom-input"
                            placeholder="Phone*"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="col-md-12 col-12 mb-3">
                          <div className="select-wrapper">
                            <Field
                              as="select"
                              id="project_select"
                              name="project_select"
                              className="form-control form-select form-field custom-input"
                              value={values.project_select}
                              onChange={(e) => {
                                const selectedValue = e.target.value;
                                const selectedProject = projectData[selectedValue];

                                setFieldValue("project_select", selectedValue);

                                if (selectedProject) {
                                  setFieldValue("project_name", selectedProject.project_name);
                                  setFieldValue("subproject_name", selectedProject.project_text);
                                }
                              }}

                            >
                              <option value="" disabled>
                                Select project
                              </option>
                              <option value="NEVER BEFORE EAST">
                                CHRYSOS EAST - Kharadi, Pune
                              </option>
                              <option value="NEVER BEFORE WEST">
                                CHRYSOS WEST - Mahalunge, Pune
                              </option>
                            </Field>
                          </div>
                          <ErrorMessage
                            name="project_select"
                            component="span"
                            className="error"
                          />
                        </div>

                        {/* <div className="col-md-12 col-12 mb-2">
                            <div className="form-gold-border">
                              <div className="form-check d-flex align-items-center gap-2">
                                <Field
                                  type="checkbox"
                                  name="join_program"
                                  id="join_program"
                                  className="form-check-input"
                                />
                                <label htmlFor="join_program" className="form-check-label">
                                  Join the <strong> VTP Direct Program </strong> to receive your exclusive coupon code and enjoy the best offers on direct site visits.<br/>
                                  <strong> No calls, no hassle - just direct rewards when you visit within 15 days. 
                                  <Link
                                    to="https://www.vtprealty.in/terms-conditions"
                                    target="_blank"
                                    className="text-decoration-underline"
                                  >
                                    {" "}
                                    <strong>  T&C Apply* </strong> {" "}
                                  </Link>
                                  </strong>
                                </label>
                                <ErrorMessage
                                  name="join_program"
                                  component="span"
                                  className="error"
                                />
                              </div>
                            </div>
                          </div> */}

                        <div className="col-md-12 col-12">
                          <Widget
                            onSuccess={handleCaptchaSuccess}
                            onError={handleCaptchaError}
                          />
                        </div>

                        <div className="col-md-12 col-12 mb-1">
                          <div className="form-check checkbox-wrapper">
                            <div className="d-flex align-items-center gap-2">
                              <Field
                                className="form-check-input"
                                type="checkbox"
                                name="term_condition"
                                id="flexCheckDefault"
                                checked={values.term_condition}
                                onChange={() =>
                                  setFieldValue("term_condition", !values.term_condition)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                You authorize, as per our
                                <Link
                                  to="https://www.vtprealty.in/privacy-policy"
                                  target="_blank"
                                  className="text-decoration-underline"
                                >
                                  {" "}
                                  <strong> Privacy Policy </strong>{" "}
                                </Link>
                                , Calls, communication via SMS, calls, RCS, and WhatsApp.
                              </label>
                            </div>
                            <ErrorMessage
                              name="term_condition"
                              component="span"
                              className="error"
                            />
                            {/* <ErrorMessage
                                name="term_condition_consent"
                                component="span"
                                className="error"
                              />*/}
                          </div>
                        </div>

                        <div className="col-md-12 col-12 mb-3">
                          <div className="form-check d-flex align-items-center gap-2">
                            <Field
                              type="checkbox"
                              name="ads"
                              aria-label="I consent to VTP Realty using my data for personalized recommendations and ads."
                              className="form-check-input"
                            />
                            <label className="form-check-label">
                              I consent to VTP Realty using my data for personalized
                              recommendations and ads.
                            </label>
                            <ErrorMessage name="ads" component="span" className="error" />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center p-0 inner-custm">
                          <button
                            type="submit"
                            className="page-btn primary submit_btn"
                            disabled={isSubmitting}
                            style={{
                              opacity: isSubmitting ? 0.6 : 1,
                              cursor: isSubmitting ? "not-allowed" : "pointer",
                            }}
                          >
                            {isSubmitting ? (
                              <span>Submitting...</span>
                            ) : (
                              <span>Reserve Your Preview</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </Form>
                  </>
                )
              }
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
