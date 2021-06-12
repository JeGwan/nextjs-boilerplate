import Button from "@app/components/atoms/Button";
import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import Mask from "@app/components/atoms/Mask";

const alertAnimation = keyframes`
  0% {
    transform: scale(0.5) translate(0, -100%);
    opacity:0;
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`;

const Wrapper = styled(Mask)`
  & > .alert {
    display: flex;
    flex-direction: column;
    margin: 5rem auto 0;
    border-radius: 1.5rem;
    padding: 2rem 3rem;
    max-height: 80vh;
    overflow-y: auto;
    width: 100%;
    max-width: 500px;
    background-color: white;
    box-sizing: border-box;
    position: relative;
    animation: ${alertAnimation} 0.4s ease-in-out forwards;
    & > .alert-title {
      font-size: 24px;
      font-weight: bold;
    }
    & > .alert-body {
      flex: auto;
      margin: 1rem 0;
    }
    & > .alert-footer {
      margin-left: auto;
    }
  }
`;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  visible?: boolean;
  onClose?: () => void;
  footer?: ReactNode;
  bodyStyle?: CSSProperties;
  destroyOnClose?: boolean;
}

const Alert = ({
  children,
  destroyOnClose = false,
  visible = false,
  onClose = () => {},
  title,
  footer,
  bodyStyle,
  ...props
}: AlertProps) => {
  const [alertElement, setAlertElement] = useState<HTMLElement>();
  useEffect(() => {
    // 렌더링 된 다음! 모달 루트를 만든다.
    const alertRoot = document.getElementById("__next");
    // modelElement를 초기화 한다. 해당하는 alertElement는 바깥에 선언되어야 한다.
    const _alertElement = document.createElement("div");
    if (!alertRoot) throw Error("__next 엘리먼트를 찾을 수 없습니다.");
    // 해당하는 모달 루트에 appendChild 를 한다.
    alertRoot.appendChild(_alertElement);
    // 모달 엘리먼트가 선언되면, 렌더가 한번 다시 되어야 한다.
    setAlertElement(_alertElement);
    return () => {
      // cleanup function에 removeChild 를 해야한다.
      alertRoot.removeChild(_alertElement);
    };
  }, []);
  useEffect(() => {
    // 모달 open/close시 body의 스크롤을 막아주기 위해 매번 실행되어야함.
    // 검색 한번만 하기 위해서 body로 document.body 참조 해줌.
    const body = document.body;
    if (visible) {
      // 모달 open 일경우 클래스를 붙이고 해당 클래스에서는 overflow:hidden 의 속성을 갖는다.
      body.classList.add("modal-open");
    } else {
      // 모달 close 일경우 해당 클래스를 삭제한다.
      body.classList.remove("modal-open");
    }
    return () => {
      // cleanup 시에도 원상태로 만들어주기 위해 삭제한다.
      body.classList.remove("modal-open");
    };
  });
  // alertElement 가 초기화가 되지 않았거나, visible이 false 면 null 반환
  if (!alertElement) return null;
  if (!visible && destroyOnClose) return null;
  return createPortal(
    <Wrapper
      data-testid="mask"
      onClick={onClose}
      className={visible ? "visible" : "hidden"}
    >
      <div className="alert" onClick={(e) => e.stopPropagation()} {...props}>
        <h2 className="alert-title">{title}</h2>
        <div className="alert-body" style={bodyStyle}>
          {children}
        </div>
        <div className="alert-footer">
          {footer || (
            <Button type="primary" onClick={onClose}>
              닫기
            </Button>
          )}
        </div>
      </div>
    </Wrapper>,
    alertElement
  );
};

export default Alert;
