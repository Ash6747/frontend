import { useState } from "react";
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Widget from "./TurnstileWidget";

const ContactForm = ({ closePopup }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const [otherInfo] = useState({
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
    "RAYA": {
      project_text: "Raya",
      project_name: "Raya",
      project_location: "Pune",
      sfid: "701fv00000CG2nC",
    },
    "CHRYSOS EAST": {
      project_text: "CHRYSOS EAST - Kharadi, Pune",
      project_name: "Pegasus Luxe",
      project_location: "Kharadi, Pune",
      sfid: "701fv00000CG2nC",
    },
    "CHRYSOS WEST": {
      project_text: "CHRYSOS WEST - Mahalunge, Pune",
      project_name: "Bluewater Luxe",
      project_location: "Mahalunge, Pune",
      sfid: "701fv00000CGCD0",
    },
  };

  const getValidationSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "Letters only please")
        .required("Name is required!"),
      mobile: Yup.string()
        .required("Mobile number is required!")
        .test("is-valid-mobile", "Invalid phone number", function (value) {
          if (!value) return false;
          if (value.startsWith("12345")) return false;
          const cleanValue = value.replace(/\D/g, "");
          return cleanValue.length >= 10 && cleanValue.length <= 15;
        }),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      message: Yup.string(),
    });

  const getClientIp = async () => {
    try {
      const res = await axios.get("https://api64.ipify.org?format=json");
      return res.data.ip;
    } catch (err) {
      return `IP not found - ${err}`;
    }
  };

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

    const project = projectData[formVal.project_select] || projectData["RAYA"] || projectData["CHRYSOS EAST"];

    const nameParts = (formVal.name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "Valued";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : nameParts[0] || "Customer";

    const formData = {
      formData: {
        FirstName: firstName,
        LastName: lastName,
        Email: formVal.email,
        ProjectName: formVal.project_name || project?.project_name || "Raya",
        SubProjectName: formVal.project_select || project?.project_text || "Raya",
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
        CountryCode: formVal.country_code || "+91",
        Mobile: formVal.mobile,
        WhatsappConsent: "TRUE",
        CallConsent: "TRUE",
        RCSConsent: "TRUE",
        SMSConsent: "TRUE",
        GCLID: formVal.gclid,
        Comment: formVal.message || " ",
        captchaToken,
        CookieConsent: await simplifiedConsent(),
        Testing: "False",
        DirectProgram: false,
        IsPhoneOptOut: "",
        couponCode: "",
        DirectProgram_c: false,
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
    name: "",
    country_code: "+91",
    mobile: "",
    email: "",
    message: "",
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
    project_select: "RAYA",
    project_name: "Raya",
    subproject_name: "RAYA",
  };

  return (
    <div className="lead-section">
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
        {({ isSubmitting }) => {
          return (
            <Form id="contact_form" className="enquiry-contact-form">
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

              <div className="row g-3">
                {/* Row 1: Name and Mobile */}
                <div className="col-md-6 col-12">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control custom-form-input"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                  />
                </div>

                <div className="col-md-6 col-12">
                  <Field
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="form-control custom-form-input"
                    placeholder="Enter mobile number"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="span"
                    className="error"
                  />
                </div>

                {/* Row 2: Email */}
                <div className="col-12">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control custom-form-input"
                    placeholder="Enter email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="col-12">
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="3"
                    className="form-control custom-form-input custom-form-textarea"
                    placeholder="Tell us what you'd like to know."
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="error"
                  />
                </div>

                {/* Row 4: Captcha */}
                <div className="col-12">
                  <div className="captcha-card-container">
                    <Widget
                      onSuccess={handleCaptchaSuccess}
                      onError={handleCaptchaError}
                    />
                  </div>
                </div>

                {/* Row 5: Submit Button */}
                <div className="col-12">
                  <button
                    type="submit"
                    className="enquire-submit-btn"
                    disabled={isSubmitting}
                    style={{
                      opacity: isSubmitting ? 0.65 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    <div className="enquire-btn-content">
                      <div className="enquire-btn-title">
                        <span>ENQUIRE</span>
                        <span>NOW</span>
                      </div>
                      <ArrowRight className="enquire-btn-arrow" size={24} />
                    </div>
                  </button>
                </div>

                {/* Row 6: Disclaimer */}
                <div className="col-12 text-center">
                  <p className="enquire-disclaimer">
                    By submitting this form, you agree to be contacted regarding Raya and related project
                  </p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
