import {
  takeFirstNotEmpty,
  takeScalarIfPossible,
  trimTrailingEmptyValues,
} from "./utils";

function normalize(initialValue: any) {
  if (!Array.isArray(initialValue)) {
    return initialValue;
  }

  const values = trimTrailingEmptyValues([...initialValue]);

  if (values.length === 0) {
    return null;
  }

  const normalizedValue = [];
  let index = 0;
  while (index < values.length) {
    const lookAheadValues = takeFirstNotEmpty(values.slice(index));

    const isLastSetOfValues = index + lookAheadValues.length >= values.length;
    if (isLastSetOfValues) {
      normalizedValue.push(lookAheadValues.pop());
      break;
    } else {
      normalizedValue.push(...lookAheadValues);
    }
    index = normalizedValue.length;
  }

  return takeScalarIfPossible(normalizedValue);
}

export { takeFirstNotEmpty, normalize };
