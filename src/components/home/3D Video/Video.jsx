import { useEffect } from "react";
import "./Video.css";
import SectionTitle from "../../common/SectionTitle";

const Video = () => {
  useEffect(() => {
    if (window.location.hash === "#virtualtour") {
      const el = document.getElementById("virtualtour");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <section id="virtualtour" className="Video section-space pt-0 side-space">
      <div className="mb-md-5 mb-3 unitplan-title-wrapper">
        <SectionTitle text={`VTP chrysos Virtual Tour`} />
      </div>

      <div className="video_wrapper">
        <iframe
          src="https://storage.net-fs.com/hosting/7980523/0/"
          width="100%"
          height="100%"
          title="VTP chrysos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
