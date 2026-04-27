import { FormField } from "./formField";

export const inputStyle =
  "border-2 border-stone-400 rounded w-full px-1 min-h-[30px]";

type TextFieldProps = {
  name: string;
  label: string;
  error?: string;
  type?: string;
};

export default function TextField({
  name,
  label,
  error,
  type,
}: TextFieldProps) {
  return (
    <FormField name={name} label={label} error={error}>
      {(field) => <input {...field} type={type} className={inputStyle} />}
    </FormField>
  );
}
