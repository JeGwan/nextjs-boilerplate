import { AppContext } from "@lib/context";
import { useContext } from "react";
import Container from "@components/Container";
import { useRouter } from "next/router";
const HomePage = () => {
  const router = useRouter();
  const { me } = useContext(AppContext);
  if (me === undefined) return <Container loading />;
  if (me === null) {
    router.replace("/login");
    return null;
  }
  return <Container>안녕</Container>;
};

export default HomePage;
