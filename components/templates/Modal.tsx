import constants from "@styles/constants";
import {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import Mask from "@components/atoms/Mask";

const modalAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity:0;
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`;

const ModalComp = styled(Mask)`
  display: flex;
  align-items: center;
  justify-content: center;
  & > .modal {
    display: flex;
    flex-direction: column;
    animation: ${modalAnimation} 0.4s ease-in-out forwards;
    & > .modal-header {
      position: relative;
      display: flex;
      align-items: center;
      flex: 0 0 48px;
      padding: 0 16px;
      height: 48px;
      font-size: 1.6rem;
      background-color: ${constants.colors.primary};
      color: white;
      font-weight: bold;
      & > .modal-close {
        cursor: pointer;
        transition: all 0.3s;
        background-color: transparent;
        &:hover {
          background-color: ${constants.colors.dark};
        }
        background-image: url(${constants.assets.close});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px;
        height: 48px;
        width: 48px;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    & > .modal-body {
      flex: auto;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }
    & > .modal-footer {
    }
    height: 80%;
    background-color: white;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    list-style: none;
    position: relative;
    width: 100%;
    max-width: calc(${constants.mobileWidth}px - 100px);
    @media screen and (max-width: ${constants.mobileWidth}px) {
      height: 100%;
      max-width: ${constants.mobileWidth}px;
    }
  }
`;

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  visible?: boolean;
  onClose?: () => void;
  footer?: ReactNode;
  bodyStyle?: CSSProperties;
}

const Modal = ({
  children,
  visible = false,
  onClose = () => {},
  title,
  footer,
  bodyStyle,
  ...props
}: ModalProps) => {
  // todo : esc 키 누를 때 꺼지기???
  const [modalElement, setModalElement] = useState<HTMLElement>();
  useEffect(() => {
    // 렌더링 된 다음! 모달 루트를 만든다.
    const modalRoot = document.getElementById("__next");
    // modelElement를 초기화 한다. 해당하는 modalElement는 바깥에 선언되어야 한다.
    const _modalElement = document.createElement("div");
    if (!modalRoot) throw Error("__next 엘리먼트를 찾을 수 없습니다.");
    // 해당하는 모달 루트에 appendChild 를 한다.
    modalRoot.appendChild(_modalElement);
    // 모달 엘리먼트가 선언되면, 렌더가 한번 다시 되어야 한다.
    setModalElement(_modalElement);
    return () => {
      // cleanup function에 removeChild 를 해야한다.
      modalRoot.removeChild(_modalElement);
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
  // modalElement 가 초기화가 되지 않았거나, visible이 false 면 null 반환
  if (!modalElement || !visible) return null;
  return createPortal(
    <ModalComp onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} {...props}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose} />
        </div>
        <div className="modal-body" style={bodyStyle}>
          {children}
        </div>
        {footer && <div className="modal-footer"></div>}
      </div>
    </ModalComp>,
    modalElement
  );
};

export default Modal;
