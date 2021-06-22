import { HTMLAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  padding: var(--column-padding) var(--row-padding);
  &.col-1 {
    width: 4.1667%;
  }
  &.col-2 {
    width: 8.3333%;
  }
  &.col-3 {
    width: 12.5%;
  }
  &.col-4 {
    width: 16.6667%;
  }
  &.col-5 {
    width: 20.8333%;
  }
  &.col-6 {
    width: 25%;
  }
  &.col-7 {
    width: 29.1667%;
  }
  &.col-8 {
    width: 33.3333%;
  }
  &.col-9 {
    width: 37.5%;
  }
  &.col-10 {
    width: 41.6667%;
  }
  &.col-11 {
    width: 45.8333%;
  }
  &.col-12 {
    width: 50%;
  }
  &.col-13 {
    width: 54.1667%;
  }
  &.col-14 {
    width: 58.3333%;
  }
  &.col-15 {
    width: 62.5%;
  }
  &.col-16 {
    width: 66.6667%;
  }
  &.col-17 {
    width: 70.8333%;
  }
  &.col-18 {
    width: 75%;
  }
  &.col-19 {
    width: 79.1667%;
  }
  &.col-20 {
    width: 83.3333%;
  }
  &.col-21 {
    width: 87.5%;
  }
  &.col-22 {
    width: 91.6667%;
  }
  &.col-23 {
    width: 95.8333%;
  }
  &.col-24 {
    width: 100%;
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  span?: number;
}

const Col = ({ span = 24, style = {}, ...props }: Props) => {
  if (span < 1) span = 1;
  else if (span > 24) span = 24;
  return <Wrapper className={`col col-${span}`} style={style} {...props} />;
};

export default Col;
