import { responsify } from "../responsify";

const add = (a: number, b: number) => a + b;

const responsifiedAdd = responsify(add);

export { responsifiedAdd };
