import styled from "@emotion/styled"
import { NavigationListData } from "../Data/LayoutData"
import { Font, Color } from "../../styles"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const filteredLinks = NavigationListData.filter(linkData => linkData.login);

  return (
    <NavList>
      {filteredLinks.map((linkData) =>
        <NavItem key={linkData.id}>
          <StyledLink
            to={linkData.href}
            isActive={location.pathname === linkData.href}
          >
            {linkData.name}
          </StyledLink>
        </NavItem>
      )}
    </NavList>
  )
}

const NavList = styled.ul`
  width: 35%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const NavItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link) <{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? Color.gray800 : Color.gray300)};
  text-decoration: none;
  cursor: pointer;
  ${Font.medium16}

  &:hover {
    color: ${Color.gray700};
  }
`;

export default Navigation