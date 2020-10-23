import React from 'react';
import { Container, Logo, MenuNav, MenuList, MenuItemLink } from './NavBar.styled';
import DrawerComponent from '../Drawer'

const NavBar = () => {
    return (
        <Container>
            <Logo>
                Retro-Board
            </Logo>
            <MenuNav>
                <MenuList>
                    <MenuItemLink style={{
                        marginLeft: '26px',
                        marginRight: '16px'
                    }}>
                        Home
                    </MenuItemLink>
                    <MenuItemLink>
                        Boards
                    </MenuItemLink>
                </MenuList>
            </MenuNav>
            <DrawerComponent />
        </Container>
    )
}

export default NavBar;
