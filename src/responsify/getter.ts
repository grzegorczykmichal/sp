import { denormalize } from "./denormalize";
import { normalize } from "./normalize";

const getter = (value: any) => {
  const lookup = denormalize(normalize(value));
  return (index: number) => {
    index = Math.min(index, lookup.length - 1);
    return lookup[index];
  };
};

export { getter };
