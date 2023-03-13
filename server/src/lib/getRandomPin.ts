export const getRandomPin = (digitCount: number) =>
  (Math.floor(Math.random() * Math.pow(10, digitCount)) + Math.pow(10, digitCount))
    .toString()
    .substring(1);
