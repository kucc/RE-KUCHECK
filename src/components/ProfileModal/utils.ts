export const modifyArray = (array: any[], index: number, value: any) => {
  return [...array.slice(0, index), value, ...array.slice(index + 1, array.length + 1)];
};