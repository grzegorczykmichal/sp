import { isNullOrUndefined, trimTrailingEmptyValues } from "./utils";

function denormalize(initialvalues: any) {
  if (!Array.isArray(initialvalues)) {
    return [initialvalues];
  }

  const values = trimTrailingEmptyValues([...initialvalues]);

  if (values.length === 0) {
    return [];
  }

  let index = values.length - 1;
  let lastValue = values[index];
  while (index >= 0) {
    if (isNullOrUndefined(values[index])) {
      values[index] = lastValue;
    } else {
      lastValue = values[index];
    }
    index--;
  }

  return values;
}

export { denormalize };
