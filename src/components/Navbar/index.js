import LinkComponent from '../Link';
import { Bars, Nav,NavIcon,NavLink } from './styles';

function Navbar({isOpen,setIsOpen}) {
  return (
    <Nav>
      <LinkComponent href="/">
        <NavLink>
          Pizza
        </NavLink>  
      </LinkComponent>
      <NavIcon onClick={()=>setIsOpen(!isOpen)}>
        <p>Menu</p>
        <Bars/>
      </NavIcon>
    </Nav>
  );
}

export default Navbar;