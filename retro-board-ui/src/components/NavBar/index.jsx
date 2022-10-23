import React from 'react';
import {
	Container,
	Logo,
	MenuNav,
	MenuList,
	MenuItemLink
} from './NavBar.styled';
import DrawerComponent from '../Drawer';
import MuiContainer from '@mui/material/Container';

const NavBar = () => {
	return (
		<Container>
			<MuiContainer>
				<Logo>Retro-Board</Logo>
				<MenuNav>
					<MenuList>
						<MenuItemLink
							style={{
								marginLeft: '16px',
								marginRight: '16px'
							}}
						>
							Home
						</MenuItemLink>
						<MenuItemLink>Boards</MenuItemLink>
					</MenuList>
				</MenuNav>
				<DrawerComponent />
			</MuiContainer>
		</Container>
	);
};

export default NavBar;
