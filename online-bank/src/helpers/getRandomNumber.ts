export const getRandomNumber = (lentgh: number) => {
  return Math.random()
    .toString()
    .slice(2, lentgh + 2);
};
