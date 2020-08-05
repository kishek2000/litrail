export function Time(hour, minutes) {
  if (hour > 12) {
    return `${hour - 12}:${minutes}pm`;
  } else if (hour === 12) {
    return `${12}:${minutes}pm`;
  }
  return `${hour}:${minutes}am`;
}
