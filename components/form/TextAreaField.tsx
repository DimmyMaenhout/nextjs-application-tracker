import { FormField } from "./formField";
import { inputStyle } from "./TextField";

type TextAreaFieldProps = {
  name: string;
  label: string;
  rows: number;
  error?: string;
};

export default function TextAreaField({
  name,
  label,
  rows = 5,
  error,
}: TextAreaFieldProps) {
  return (
    <FormField name={name} label={label} error={error}>
      {(field) => (
        <textarea
          {...field}
          className={inputStyle}
          name={name}
          rows={rows}
          id={name}
        />
      )}
    </FormField>
  );
}
