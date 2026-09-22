import { useState, useEffect } from "react";

const DEFAULT_IMAGE = "/images/general/Asset.webp";
const DEFAULT_ALT = "VTP Chrysos";

const Image = ({
  src,
  alt = DEFAULT_ALT,
  className = "",
  defaultClasses = "img-fluid",
  fallbackSrc = DEFAULT_IMAGE,
  loading = "lazy",
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  const handleError = (e) => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  const combinedClassName = [defaultClasses, className].filter(Boolean).join(" ");

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt || DEFAULT_ALT}
      className={combinedClassName}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
