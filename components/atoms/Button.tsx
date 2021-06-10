import { classNames } from "@app/lib/utils";
import constants from "@app/styles/constants";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const ButtonComp = styled.button`
  height: ${constants.uiDefaultHeight}px;
  padding: 0 ${constants.defaultEdgePadding}px;
  line-height: ${constants.uiDefaultHeight}px;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${constants.colors.grey1};
  background-color: ${constants.colors.grey7};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    background-color: ${constants.colors.grey6};
  }
  &:active {
    background-color: ${constants.colors.grey5};
  }
  &.primary {
    background-color: ${constants.colors.primary};
    color: white;
    &:hover {
      background-color: ${constants.colors.dark};
    }
    &:active {
      background-color: ${constants.colors.darker};
    }
  }
`;

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type?: "primary" | "default";
  htmlType?: "button" | "submit" | "reset";
};
const Button = ({ type, className, htmlType, ...props }: ButtonProps) => {
  return (
    <ButtonComp
      type={htmlType}
      className={classNames([className, type])}
      {...props}
    />
  );
};

export default Button;
