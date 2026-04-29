import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-(--color-main-button) hover:bg-(--color-main-button-hover)",
  danger: "bg-(--color-danger-button) hover:bg-(--color-danger-button-hover)",
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`
        px-4 py-2  text-white font-bold rounded-2xl
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
