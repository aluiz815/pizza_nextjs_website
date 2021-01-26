import styled from 'styled-components';
import {FaPizzaSlice} from 'react-icons/fa';
export const Nav = styled.nav`
  background:transparent;
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

export const NavIcon = styled.div`
  display:block;
  position:absolute;
  top:0;
  right:0;
  cursor: pointer;
  color:#fff;
  transition:0.2s ease-out;
  p {
    transform:translate(-175%,100%);
    font-weight:bold;
  }
  &:hover {
    transition:0.2s ease-out;
    cursor: pointer;
    color:#e31837;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size:2rem;
  transform:translate(-50%,-15%);
`;