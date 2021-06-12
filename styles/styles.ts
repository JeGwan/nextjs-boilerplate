type RGB = [number, number, number];
export const hexToRgb = (hex: string): RGB => {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0];
  return result.map((v) => parseInt(v, 16)).slice(1) as RGB;
};

const primary = "#0050ff";
const primaryAlpha = `rgb(${hexToRgb(primary).join(" ")} / 20%)`;
// todo dark, darker, darkest 등 primary 컬러의 변형 버전들을 만들 수 있는 함수..!

const styles = {
  sizes: {
    edgePadding: 16,
    uiHeight: 50,
    mobileWidth: 640,
  },
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

export default styles;
