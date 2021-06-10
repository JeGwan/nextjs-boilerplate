import { hexToRgb } from "@app/lib/utils";

const primary = "#0050ff";
const primaryAlpha = `rgb(${hexToRgb(primary).join(" ")} / 20%)`;
// todo dark, darker, darkest 등 primary 컬러의 변형 버전들을 만들 수 있는 함수..!

const constants = {
  defaultEdgePadding: 16,
  uiDefaultHeight: 50,
  mobileWidth: 640,
  assets: {
    close: "/assets/close.svg",
  },
  colors: {
    lightest: "#BFDDFF",
    lighter: "#80AFFF",
    light: "#407EFF",
    primary,
    primaryAlpha,
    dark: "#0040C4",
    darker: "#003388",
    darkest: "#00234D",
    grey1: "#1B1B1B",
    grey2: "#404040",
    grey3: "#666666",
    grey4: "#888",
    grey5: "#A8A8A8",
    grey6: "#C8C8C8", // border, placeholder color
    grey7: "#E7E7E7",
    white: "#FFFFFF",
  },
};
export default constants;
