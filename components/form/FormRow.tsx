import { PropsWithChildren } from "react";

type FormRowProps = PropsWithChildren;

export default function FormRow({ children }: FormRowProps) {
  return <div className="flex flex-row gap-4">{children}</div>;
}
