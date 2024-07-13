const sortAlphabetically = <T extends Record<string, any>, K extends keyof T>(
  items: (T & Record<K, string>)[],
  property: K
): T[] => {
  return items.sort((a, b) => {
    const propA = a[property].toLowerCase();
    const propB = b[property].toLowerCase();

    if (propA < propB) {
      return -1;
    }
    if (propA > propB) {
      return 1;
    }
    return 0;
  });
};

export default sortAlphabetically;
