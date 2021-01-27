import LinkComponent from '../Link';
import { SidebarContainer,Icon,CloseIcon,SidebarMenu,MenuItem,SideBtnWrapper,MenuItemRoute } from './styles';

function Sidebar({isOpen,setIsOpen}) {

  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={()=>setIsOpen(!isOpen)}>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <LinkComponent href="/">
          <MenuItem>Pizzas</MenuItem>
        </LinkComponent>
        <LinkComponent href="/">
          <MenuItem>Sobremesas</MenuItem>    
        </LinkComponent>
        <LinkComponent href="/">
         <MenuItem>Menu Completo</MenuItem>
        </LinkComponent>
      </SidebarMenu>
      <SideBtnWrapper>
        <LinkComponent href="/">
            <MenuItemRoute>Peça Agora</MenuItemRoute>
        </LinkComponent>
      </SideBtnWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;