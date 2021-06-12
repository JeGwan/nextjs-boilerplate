import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { useState } from "react";
import Alert from "./Alert";

describe("Alert", () => {
  const title = "알러트";
  const [visible, setVisible] = useState(false);
  const { getByTestId } = render(
    <div>
      <Alert
        data-testid="1"
        visible={visible}
        title={title}
        onClose={() => setVisible(false)}
      />
    </div>
  );
  const alert = getByTestId("1");
  const mask = getByTestId("mask");
  test("렌더링 잘 되니? 😀", () => {
    expect(alert).toBeInTheDocument();
  });

  test("끄기 잘 되니? 😀", () => {
    fireEvent.click(mask);
    expect(() => alert).not.toBeInTheDocument();
  });
});
