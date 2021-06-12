import { classNames } from "@app/lib/utils";
import styles from "@app/styles/styles";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const ButtonComp = styled.button`
  height: ${styles.sizes.uiHeight}px;
  padding: 0 ${styles.sizes.edgePadding}px;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${styles.colors.grey1};
  background-color: ${styles.colors.grey7};
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
    background-color: ${styles.colors.grey6};
  }
  &:active {
    background-color: ${styles.colors.grey5};
  }
  &.primary {
    background-color: ${styles.colors.primary};
    color: white;
    &:hover {
      background-color: ${styles.colors.dark};
    }
    &:active {
      background-color: ${styles.colors.darker};
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
