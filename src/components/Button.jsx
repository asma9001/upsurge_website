import React from "react";

const Button = ({
  children,
  text,
  onClick,
  className = "",
  loading = false,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        px-10 py-2
        font-medium
        rounded-lg
        bg-[#5856D6]
        text-white
        transition-all
        duration-300
        flex items-center
        justify-center
        gap-2
        ${loading ? "opacity-70 cursor-not-allowed" : ""}
        ${className}
      `}
      style={{ fontWeight: 500 }}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {children ? children : text}
    </button>
  );
};

export default Button;
