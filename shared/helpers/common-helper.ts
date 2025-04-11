export function getUKFormatedDate(date: string): string {
  // const dateObj = new Date(date);
  // const formattedDate = dateObj.toLocaleDateString('en-GB');
  // return formattedDate.replace(/\//g, '-');

  const dateObj = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  return dateObj
    .toLocaleString('en-GB', options)
    .replace(',', '') // remove comma
    .replace(/\s(am|pm)$/i, (match) => match.toUpperCase());
}
