type ApplicationDetailRowProps = {
  title: string;
  value: string | null;
  fallbackValue?: string;
};

export default function ApplicationDetailRow({
  title,
  value,
  fallbackValue = "N/A",
}: ApplicationDetailRowProps) {
  return (
    <div className="flex">
      <p className="font-bold w-40">{title}</p>
      <p>{value ? value : fallbackValue}</p>
    </div>
  );
}
