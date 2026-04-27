import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`px-4 py-2 bg-(--color-main-button) hover:bg-(--color-main-button-hover) text-white font-bold rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
