export function getUKFormatedDate(date: string): string {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-GB');
  return formattedDate.replace(/\//g, '-');
}
