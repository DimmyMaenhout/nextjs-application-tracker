export function formatDate(date: Date): string {
  if (!isValidDate(date)) {
    return "/";
  }
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function isValidDate(date: Date): boolean {
  return !isNaN(date.getDate());
}
