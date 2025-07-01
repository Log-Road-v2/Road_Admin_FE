import styled from "@emotion/styled"
import RoundButton from "../Common/Button/RoundButton"
import { Color, Font } from "../../styles"
import { useNavigate } from "react-router-dom"
// import { useGetUserInfo } from "../../hooks/query/auth"

const LoginNav = () => {
  const navigate = useNavigate();

  const isLoggedIn = true; // false로 바꾸면 '로그인' 버튼이 보입니다.
  const dummyUserInfo = { name: "임다영" };

  // const { data: userInfo, isLoading, isError } = useGetUserInfo();
  // const isLoggedIn = !!userInfo;

  return (
    <NavWrapper>
      {isLoggedIn ? (
        <UserName onClick={() => navigate("/mypage")}>
          {dummyUserInfo.name}님
        </UserName>
      ) : (
        <RoundButton
          text="로그인"
          onClick={() => navigate("/login")}
        />
      )}
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const UserName = styled.div`
  max-width: 100px;
  justify-content: flex-end;
  color: ${Color.gray300};
  ${Font.medium16}
  cursor: pointer;

  &:hover {
    color: ${Color.gray700};
  }
`

export default LoginNav;
