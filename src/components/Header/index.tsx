import styled from "@emotion/styled";
import Navigation from "./Navigation";
import LoginNav from "./LoginNav";
import { Logo } from "../../assets";
import { Color } from "../../styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <InnerContainer width={80}>
        <Logo onClick={() => navigation("/main")} />
        {!isMobile && <Navigation />}
        <LoginNav />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${Color.gray200};
  background-color: ${Color.white};
  z-index: 100;
`;

const InnerContainer = styled.div<{
  width?: number
}>`
  width: ${({ width = 10 }) => `${width}vw`};
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
