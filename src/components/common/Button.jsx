import { forwardRef } from "react";

const DEFAULT_BUTTON_CLASS = "page-btn";

const Button = forwardRef(
  (
    {
      children,
      text,
      variant = "primary",
      className = "",
      defaultClasses = DEFAULT_BUTTON_CLASS,
      type = "button",
      icon,
      iconPosition = "right",
      onClick,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const variantClass = variant ? `btn-${variant} ${variant}` : "";
    const combinedClassName = [defaultClasses, variantClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClassName}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children ?? text}
        {icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
