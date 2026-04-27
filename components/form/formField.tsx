type FormFieldProps = {
  label: string;
  name: string;
  className?: string;
  error?: string;
  children: (props: { id: string; name: string }) => React.ReactNode;
};

export function FormField({
  label,
  name,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-1 flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      {children({
        id: name,
        name,
      })}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
