import styled from 'styled-components';
export const Nav = styled.nav`
  background:red;
  height:5rem;
  display:flex;
  justify-content:center;
  font-weight:bold;
`;

export const NavLink = styled.a`
  color:#fff;
  font-size:2rem;
  display:flex;
  align-items:center;
  @media screen and (max-width:400px) {
    position:absolute;
    top:10px;
    left:25px;
  }
`;

export const NavIcon = styled.div``