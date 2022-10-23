import MuiContainer from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';

export const Container = styled(MuiContainer)(() => ({
	display: 'flex',
	alignItems: 'center',
	padding: '0 16px',
	backgroundColor: '#fafafa'
}));

export const Logo = styled(() => <Typography component="h1" />)(() => ({
	fontSize: '26px'
}));

export const MenuNav = styled('nav')(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center'
}));

export const MenuList = styled('ul')(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	paddingLeft: 0
}));

export const MenuListItem = styled('li')(() => {
	const commonStyles = {
		color: '#172b4d',
		textDecoration: 'none',
		cursor: 'pointer'
	};
	return {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 0,
		padding: '16px 0',
		'& > *': commonStyles,
		'& > *:hover': commonStyles,
		'& > *:active': commonStyles
	};
});

const MenuItem = ({ className, children, ...rest }) => (
	<MenuListItem>
		<a className={className} {...rest}>
			{children}
		</a>
	</MenuListItem>
);

export const MenuItemLink = styled(MenuItem)``;
