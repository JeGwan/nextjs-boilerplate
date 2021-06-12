import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const { getByTestId } = render(
    <Button data-testid="1" type="primary" placeholder="플레이스 홀더">
      확인
    </Button>
  );
  const button = getByTestId("1");

  test("렌더링 잘되니? 😀", () => {
    expect(button).toBeInTheDocument();
  });

  test("쓸데 없는 놈은 없지? 😀", () => {
    expect(() => getByTestId("3")).toThrow();
  });
});
