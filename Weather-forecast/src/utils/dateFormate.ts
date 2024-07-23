export const msToTime = (ms: number, timezone: number): string => {
  const date = new Date((ms + timezone) * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};
