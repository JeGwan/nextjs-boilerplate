import { useState } from "react";
import styled from "styled-components";

import Button, { LinkButton } from "@app/components/atoms/Button";
import Col from "@app/components/atoms/Col";
import Footer from "@app/components/atoms/Footer";
import Header from "@app/components/atoms/Header";
import Input from "@app/components/atoms/Input";
import Main from "@app/components/atoms/Main";
import Row from "@app/components/atoms/Row";
import Select from "@app/components/atoms/Select";
import TextArea from "@app/components/atoms/TextArea";
import Alert from "@app/components/organisms/Alert";
import Container from "@app/components/templates/Container";
import Modal from "@app/components/templates/Modal";
import styles from "@app/styles";
import Pagination from "@app/components/molcules/Pagination";

const gridCols = [
  1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 8, 8, 8, 12, 12,
  10, 14, 24,
];

const getFontColor = (name: string) => {
  if (
    name === "lightest" ||
    name === "white" ||
    name === "grey8" ||
    name === "grey9"
  )
    return "black";
  return "white";
};

const PageSection = styled.section`
  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 2rem 0 1rem;
  }
  .content {
    & > * {
      margin-right: 8px;
    }
  }
  .col {
    & > div {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${styles.colors.grey9};
    }
  }
`;
const Page = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>();
  const [page, setPage] = useState(3);
  return (
    <Container title="Home">
      <Header>
        <section>
          <h1 className="title">😎 Header</h1>
        </section>
      </Header>
      <Main>
        <PageSection>
          <h2>Button</h2>
          <div className="content">
            <Button>default</Button>
            <Button type="outlined">outlined</Button>
            <Button type="primary">primary</Button>
          </div>
          <h2>Button small</h2>
          <div className="content">
            <Button size="small">default</Button>
            <Button size="small" type="outlined">
              outlined
            </Button>
            <Button size="small" type="primary">
              primary
            </Button>
          </div>
          <h2>LinkButton({"A tag wrapped by next/link"})</h2>
          <div className="content">
            <LinkButton href="/">Go to "/"</LinkButton>
          </div>
          <h2>Input</h2>
          <div className="content">
            <Input />
            <Input placeholder="placeholder" />
            <Input placeholder="disabled" disabled />
          </div>
          <h2>Select</h2>
          <div className="content">
            <Select>
              <option value="1">🐔 꼬꼬댁</option>
              <option value="2">🐱 냐옹</option>
            </Select>
          </div>
          <h2>TextArea</h2>
          <div className="content">
            <TextArea rows={5}></TextArea>
          </div>
          <h2>Modal</h2>
          <div className="content">
            <Button onClick={() => setModalVisible(true)}>모달 켜기</Button>
          </div>
          <h2>Alert</h2>
          <div className="content">
            <Button
              type="primary"
              onClick={() => setAlertMessage("안녕하세요")}
            >
              알러트 켜기
            </Button>
          </div>
          <h2>Gird(Row, Col)</h2>
          <Row gap={10}>
            {gridCols.map((n, i) => (
              <Col span={n} key={i}>
                <div>{n}</div>
              </Col>
            ))}
          </Row>
          <h2>Colors</h2>
          <Row gap={10}>
            {Object.entries(styles.colors).map(([name, color], i) => (
              <Col span={4} key={i}>
                <div
                  style={{
                    backgroundColor: color,
                    color: getFontColor(name),
                  }}
                >
                  {name}
                </div>
              </Col>
            ))}
          </Row>
          <h2>Pagination</h2>
          <Pagination
            currentPage={page}
            numsPerPage={5}
            total={100}
            onPageChange={setPage}
          />
        </PageSection>
      </Main>
      <Footer>
        <section>🦶 Footer</section>
      </Footer>
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
    </Container>
  );
};

export default Page;
