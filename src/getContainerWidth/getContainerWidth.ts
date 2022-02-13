import { responsify } from "../responsify";

function getContainerWidth(containerMargin: number, isSnappedToEdge: boolean) {
  if (isSnappedToEdge) {
    return "100%";
  }

  return `calc(100% - ${containerMargin / 2}px)`;
}

const responsifiedGetContainerWidth = responsify(getContainerWidth);

export { responsifiedGetContainerWidth };
