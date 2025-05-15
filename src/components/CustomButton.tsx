import React from "react";
import clsx from "clsx";

interface CustomButtonProps {
  text: string;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  showArrow = true,
  className,
  onClick,
  variant = "primary",
}) => {
  const baseStyles =
    "flex items-center justify-center border-none rounded-xl cursor-pointer px-6 py-3 text-base font-bold transition-colors";

  const variants = {
    primary: "bg-[#ff69b4] text-white hover:bg-[#ff4da6]",
    secondary: "bg-pink-100 text-pink-400 hover:bg-pink-200 text-sm h-7",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      aria-label={text || "button"}
    >
      {text}
      {showArrow && (
        <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
};

export default CustomButton;
