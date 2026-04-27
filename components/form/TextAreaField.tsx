import { FormField } from "./formField";
import { inputStyle } from "./TextField";

type TextAreaFieldProps = {
  name: string;
  rows: number;
  error?: string;
};

export default function TextAreaField({
  name,
  rows = 5,
  error,
}: TextAreaFieldProps) {
  return (
    <FormField name="notes" label="Notes" error={error}>
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
