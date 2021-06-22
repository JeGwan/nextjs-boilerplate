import { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  & > .row {
    display: flex;
    flex-flow: row wrap;
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  gap?: number | [number, number];
}

const Row = ({ gap = 0, style = {}, children, ...props }: Props) => {
  let [rowGap, colGap] = typeof gap === "number" ? [gap, gap] : gap;
  style.margin = `-${colGap / 2}px -${rowGap / 2}px`;
  // @ts-ignore
  style["--column-padding"] = `${colGap / 2}px`;
  // @ts-ignore
  style["--row-padding"] = `${rowGap / 2}px`;
  return (
    <Wrapper style={style} {...props}>
      <div className="row">{children}</div>
    </Wrapper>
  );
};

export default Row;
