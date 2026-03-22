import { cloneElement, ReactElement } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  className?: string;
  children: ReactElement<any>;
};

export function FormField({
  label,
  name,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={name}>{label}</label>
      {cloneElement(children, {
        id: name,
        name,
      })}
    </div>
  );
}
