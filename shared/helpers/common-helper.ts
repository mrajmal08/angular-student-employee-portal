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

export function convertTo24HourWithSeconds(timeStr: string): string {
  const [time, modifier] = timeStr.split(' '); // "04:00 AM"
  let [hours, minutes] = time.split(':').map(Number);

  if (modifier === 'PM' && hours < 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  const hh = hours.toString().padStart(2, '0');
  const mm = minutes.toString().padStart(2, '0');
  const ss = '00';

  return `${hh}:${mm}:${ss}`;
}

export function convertTo12Hour(timeStr: string): string {
  let [hours, minutes, seconds] = timeStr.split(':').map(Number);

  const modifier = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // convert 0 → 12 for midnight, and >12 to 12-hour format

  const hh = hours.toString().padStart(2, '0');
  const mm = minutes.toString().padStart(2, '0');

  return `${hh}:${mm} ${modifier}`;
}
