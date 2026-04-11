export function formatDate(date: Date): string {
  if (!isValidDate(date)) {
    return "/";
  }
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function convertStringToDate(dateString: string): Date {
  // @TODO: Might have to check for valid format and that the string can be parsed to a date!!!
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function isValidDate(date: Date): boolean {
  return !isNaN(date.getDate());
}
