const isNullOrUndefined = (v: any) => v === null || v === undefined;
const notNullOrUndefined = (v: any) => v !== null && v !== undefined;

const takeScalarIfPossible = (array: any[]) =>
  array.length === 1 ? array[0] : array;

const trimTrailingEmptyValues = (initalArray: any) => {
  const array = [...initalArray];
  while (array.length > 0 && isNullOrUndefined(array[array.length - 1])) {
    array.pop();
  }
  return array;
};

const takeFirstNotEmpty = (values: any[]) => {
  let index = values.findIndex(notNullOrUndefined);

  if (index === -1) {
    return [];
  }

  const value = values[index];

  while (index + 1 <= values.length - 1 && values[index + 1] === value) {
    index++;
  }

  const result = new Array(index).fill(null);
  result.push(value);

  return result;
};

export {
  isNullOrUndefined,
  notNullOrUndefined,
  takeScalarIfPossible,
  trimTrailingEmptyValues,
  takeFirstNotEmpty,
};
