import { getter } from "./getter";
import { normalize } from "./normalize";

const run = (fn: Function, ...values: any[]) => {
  const lengths = values.map((value) =>
    Array.isArray(value) ? value.length : 1
  );
  const maxLength = Math.max(...lengths);

  const getters = values.map(getter);

  const results = [];
  for (let i = 0; i < maxLength; i++) {
    const args = getters.map((get) => get(i));
    results.push(fn(...args));
  }

  return normalize(results);
};

const responsify =
  (fn: Function) =>
  (...args: any[]) =>
    run(fn, ...args);

export { responsify };
