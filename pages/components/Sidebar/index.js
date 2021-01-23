import React from 'react';
import LinkComponent from '../Link';
import { SidebarContainer,Icon,CloseIcon,SidebarMenu,MenuItem,SideBtnWrapper,MenuItemRoute } from './styles';

function Sidebar({isOpen,toggle}) {

  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>
        <LinkComponent href="/">
          <MenuItem>Pizzas</MenuItem>
        </LinkComponent>
        <LinkComponent href="/">
          <MenuItem>Dessets</MenuItem>    
        </LinkComponent>
        <LinkComponent href="/">
         <MenuItem>Full Menu</MenuItem>
        </LinkComponent>
      </SidebarMenu>
      <SideBtnWrapper>
        <LinkComponent href="/">
            <MenuItemRoute>Order Now</MenuItemRoute>
        </LinkComponent>
      </SideBtnWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;