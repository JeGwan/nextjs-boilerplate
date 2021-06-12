import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Mask from "./Mask";

describe("Mask", () => {
  const { getByTestId } = render(<Mask data-testid="1" />);
  const mask = getByTestId("1");

  test("렌더링 잘되니? 😀", () => {
    expect(mask).toBeInTheDocument();
  });
});
