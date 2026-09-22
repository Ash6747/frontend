import { useState, useEffect } from "react";

const DEFAULT_VIDEO = "/videos/banner/banner.mp4";
const DEFAULT_POSTER = "/videos/banner/ban-1-opt.webp";
const DEFAULT_ALT = "VTP Chrysos Video";

const Video = ({
  src,
  poster = DEFAULT_POSTER,
  alt = DEFAULT_ALT,
  title,
  className = "",
  defaultClasses = "w-100",
  fallbackSrc = DEFAULT_VIDEO,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  onError,
  ...props
}) => {
  const [videoSrc, setVideoSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setVideoSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  const handleError = (e) => {
    if (videoSrc !== fallbackSrc) {
      setVideoSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  const combinedClassName = [defaultClasses, className].filter(Boolean).join(" ");

  return (
    <video
      src={videoSrc || fallbackSrc}
      poster={poster}
      title={title || alt || DEFAULT_ALT}
      aria-label={alt || DEFAULT_ALT}
      className={combinedClassName}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      onError={handleError}
      {...props}
    >
      <source src={videoSrc || fallbackSrc} type="video/mp4" />
      {alt || DEFAULT_ALT}
    </video>
  );
};

export default Video;
