export const formatDuration = (durationMs: number) => {
  let seconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;
  seconds %= 60;
  const secondsString = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutesString}:${secondsString}`;
};
