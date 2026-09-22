import { Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = ({ className = "", size = 20, ...props }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px",
        borderRadius: "50%",
        color: "inherit",
        transition: "transform 0.2s ease, color 0.2s ease",
      }}
      {...props}
    >
      {isDark ? <Sun size={size} color="#F7C985" /> : <Moon size={size} />}
    </button>
  );
};

export default ThemeToggle;
