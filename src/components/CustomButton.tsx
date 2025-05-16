import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CustomButtonProps {
  text: string;
  showArrow?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
  variant?: "primary" | "secondary";
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  showArrow = true,
  className,
  onClick,
  variant = "primary",
  to,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center border-none rounded-xl cursor-pointer px-6 py-3 text-base font-bold transition-colors whitespace-nowrap";

  const variants = {
    primary: "bg-[#ff69b4] text-white hover:bg-[#ff4da6]",
    secondary:
      "bg-pink-100 text-pink-400 hover:bg-pink-200 text-sm h-7 px-4 py-0",
  };

  const arrow = showArrow && (
    <ArrowRight
      className={`ml-2 ${
        variant === "secondary" ? "w-4 h-4" : "w-5 h-5"
      } transition-transform group-hover:translate-x-1`}
    />
  );

  const Element = to ? Link : "button";

  const commonProps = {
    className: clsx(baseStyles, variants[variant], className, {
      group: showArrow,
    }),
    onClick: onClick,
    "aria-label": text || "button",
  };

  if (to) {
    return (
      <Link {...commonProps} to={to}>
        {text}
        {arrow}
      </Link>
    );
  } else {
    return (
      <button {...commonProps} type="button">
        {text}
        {arrow}
      </button>
    );
  }
};

export default CustomButton;
