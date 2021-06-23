import styled from "styled-components";

import Container from "@app/components/templates/Container";
import Calendar from "@app/components/organisms/Calendar";
import { useState } from "react";
import dayjs from "dayjs";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Page = () => {
  const [pickedDate, setPickedDate] = useState<dayjs.Dayjs>();
  return (
    <Container title="SSR">
      <Wrapper>
        <h1>{pickedDate?.format("YYYY-MM-DD")} 선택</h1>
        <Calendar value={pickedDate} onChange={setPickedDate} />
      </Wrapper>
    </Container>
  );
};

export default Page;
