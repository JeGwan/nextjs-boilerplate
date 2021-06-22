import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { classNames } from "@app/lib/utils";
import styles from "@app/styles";

const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  min-height: ${styles.sizes.uiHeight}px;
  padding: 0 ${styles.sizes.edgePadding}px;
  font-size: 1.4rem;
  font-family: sans-serif;
  font-weight: bold;
  color: ${styles.colors.grey1};
  background-color: ${styles.colors.grey7};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  &.small {
    font-size: 1.2rem;
    min-height: ${styles.sizes.uiHeight - 8}px;
    padding: 0 ${styles.sizes.edgePadding - 8}px;
  }
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    color: ${styles.colors.grey1};
    background-color: ${styles.colors.grey6};
  }
  &:active {
    color: ${styles.colors.grey1};
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
  &.outlined {
    background-color: white;
    color: ${styles.colors.grey1};
    border: 1px solid ${styles.colors.grey1};
    &:hover {
      background-color: ${styles.colors.grey7};
    }
    &:active {
      background-color: ${styles.colors.grey6};
    }
  }
  &:disabled {
    background-color: ${styles.colors.grey7};
    color: ${styles.colors.grey6};
    &:hover {
      background-color: ${styles.colors.grey7};
    }
    &:active {
      background-color: ${styles.colors.grey7};
    }
  }
`;

interface ButtonAugmentedProps {
  type?: "primary" | "default" | "outlined";
  htmlType?: "button" | "submit" | "reset";
  size?: "small" | "medium";
}

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> &
  ButtonAugmentedProps;

const Button = ({
  type,
  className,
  htmlType,
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      type={htmlType}
      className={classNames([className, type, size])}
      {...props}
    />
  );
};

export type LinkPuttonProps = Omit<AnchorHTMLAttributes<any>, "type"> &
  ButtonAugmentedProps;

export const LinkButton = ({
  type,
  className,
  htmlType,
  size = "medium",
  href,
  ...props
}: LinkPuttonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <Wrapper
          as="a"
          type={htmlType}
          className={classNames([className, type, size])}
          {...props}
        />
      </Link>
    );
  }
  return (
    <Wrapper
      as="a"
      type={htmlType}
      className={classNames([className, type, size])}
      {...props}
    />
  );
};

export default Button;
