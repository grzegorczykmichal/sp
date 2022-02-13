import { responsify } from "../responsify";

type InputObject = {
  [key: string]: number;
};

function maxValueKeyInner(obj: InputObject): string | undefined {
  return Object.entries(obj).reduce(
    // @ts-ignore
    (acc, current) => {
      // @ts-ignore
      return current[1] > acc[1] ? current : acc;
    },
    [undefined, Number.MIN_VALUE]
  )[0];
}

const responsifyMaxValueKey = responsify(maxValueKeyInner);

export { responsifyMaxValueKey };
