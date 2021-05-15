import Button from "@components/atoms/Button";
import Alert from "@components/organisms/Alert";
import Container from "@components/templates/Container";
import Modal from "@components/templates/Modal";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 100px;
    height: 100px;
  }
  & > .buttons {
    display: flex;
    & > * {
      margin: 0 4px;
    }
  }
`;

interface HomePageProps {}

const HomePage = (_props: HomePageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();
  return (
    <Container title="Home">
      <Modal
        title="안녕하세요"
        onClose={() => setModalVisible(false)}
        visible={modalVisible}
      >
        😃
      </Modal>
      <Alert
        title="기본 알러트"
        visible={!!alertMessage}
        onClose={() => setAlertMessage(undefined)}
      >
        {alertMessage}
      </Alert>
      <Wrapper>
        <img src="/assets/next-dot-js.svg" alt="" />
        <h1>👋 Hello World</h1>
        <p>작업을 한번 해볼까요.</p>
        <p>API End point : {process.env.END_POINT}</p>
        <div className="buttons">
          <Button onClick={() => setModalVisible(true)}>모달 켜기</Button>
          <Button type="primary" onClick={() => setAlertMessage("안녕하세요")}>
            알러트 켜기
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  ctx
) => {
  return { props: {} };
};

export default HomePage;
