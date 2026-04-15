type ApplicationDetailRowProps = {
  title: string;
  value: string;
};

export default function ApplicationDetailRow({
  title,
  value,
}: ApplicationDetailRowProps) {
  return (
    <div className="flex">
      <p className="font-bold w-40">{title}</p>
      <p>{value}</p>
    </div>
  );
}
