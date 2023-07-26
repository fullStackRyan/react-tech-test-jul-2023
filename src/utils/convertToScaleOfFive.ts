export const convertToScaleOfFive = (num: number): number => {
  const normalizedNum = (num / 1000) * 5;
  return Math.round(normalizedNum * 2) / 2;
};
