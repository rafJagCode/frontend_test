const getRandomInt = (minInclusive: number, maxExclusive: number): number => {
  return Math.floor(
    Math.random() * (maxExclusive - minInclusive) + minInclusive
  );
};

export default getRandomInt;
