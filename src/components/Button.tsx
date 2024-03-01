import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonStyle = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The desired branding of the button */
  buttonStyle: ButtonStyle;
  children: ReactNode;
}

const baseBtnStyle = "border-2 px-4 py-2 uppercase ";
const buttonStyles = {
  primary:
    "hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-slate-800 dark:active:bg-slate-700",
  secondary:
    "bg-green-600 hover:bg-green-500 active:bg-green-700 text-white w-full",
};

const getButtonClassnames = (
  buttonStyle: ButtonStyle,
  className: string | undefined
) => `${baseBtnStyle} ${buttonStyles[buttonStyle]} ${className}`;

export const Button = ({
  buttonStyle,
  children,
  onClick,
  className,
  ...attributes
}: ButtonProps) => {
  return (
    <button
      className={getButtonClassnames(buttonStyle, className)}
      onClick={onClick}
      {...attributes}
    >
      {children}
    </button>
  );
};
