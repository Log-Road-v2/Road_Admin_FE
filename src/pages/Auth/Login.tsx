import styled from "@emotion/styled";
import { Logo } from "../../assets";
import { Color, Font } from "../../styles";
import SubmitButton from "../../components/button/SubmitButton";
import AuthBackground from "../../assets/Png/AuthBackground.png";
import Input from "../../components/Input/index";
import { useState } from "react";
import ApproveButton from "../../components/button/ApproveButton";
import { login } from "../../apis/Auth";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../../utils/cookie";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(form);
      Cookie.set("token", res.accessToken);
      navigate('/main')
    } catch (e: any) {
      setError(e?.response?.data?.message || "로그인에 실패했습니다.");
    }
    setLoading(false);
  };

  const isDisabled = !form.email || !form.password || loading;

  return (
    <Container>
      <Wrapper>
        <Top>
          <Logo />
          <Content>기록을 남기는 로드</Content>
        </Top>
        <InputWrapper>
          <Input
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={handleChange("email")}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={handleChange("password")}
          />
        </InputWrapper>
        <InputWrapper>
          <ButtonWrapper>
            <SubmitButton text={loading ? "로그인 중..." : "로그인"} onClick={handleLogin} disabled={isDisabled} />
            <ApproveButton text="회원가입 하러가기" />
          </ButtonWrapper>
          {error && <Login style={{ color: 'red' }}>{error}</Login>}
          <Login>아이디 찾기 | 비밀번호 찾기</Login>
        </InputWrapper>
      </Wrapper>
      <Image src={AuthBackground} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 63px;
`;

const Top = styled.div`
  width: 360px;
`;

const Content = styled.p`
  color: ${Color.gray300};
  ${Font.medium16};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Login = styled.p`
  color: ${Color.gray300};
  ${Font.regular14};
  display: flex;
  align-self: center;
`;

const Image = styled.img`
  width: 60%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;
