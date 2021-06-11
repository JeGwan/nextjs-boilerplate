import { multiply } from "@app/lib/math";
import React, { ReactElement, useState } from "react";

interface Props {}

function Page({}: Props): ReactElement {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="text"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <h1>결과</h1>
      <p>{multiply(a, b)}</p>
    </div>
  );
}

export default Page;
