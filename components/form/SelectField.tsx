import { FormField } from "./formField";
import { inputStyle } from "./TextField";

type Item = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  label: string;
  error?: string;
  items: Item[];
};

export default function SelectField({
  name,
  label,
  error,
  items,
}: SelectFieldProps) {
  return (
    <FormField name={name} label={label} error={error}>
      {(field) => (
        <select {...field} className={inputStyle}>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      )}
    </FormField>
  );
}
