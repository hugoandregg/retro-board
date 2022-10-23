import React from 'react';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Input } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { styled } from '@mui/material/styles';

const PREFIX = 'DrawerComponent';
const classes = {
	root: `${PREFIX}-root`,
	drawerPaper: `${PREFIX}-drawerPaper`,
	toolbar: `${PREFIX}-toolbar`,
	drawerHeader: `${PREFIX}-drawerHeader`,
	drawerTitle: `${PREFIX}-drawerTitle`,
	drawerInputWrapper: `${PREFIX}-drawerInputWrapper`,
	drawerInput: `${PREFIX}-drawerInput`,
	drawerItem: `${PREFIX}-drawerItem`
};
const Root = styled('div')(({ theme }) => ({
	[`& .${classes.drawerPaper}`]: {
		width: 240,
		paddingRight: '20px'
	},
	[`& .${classes.toolbar}`]: {
		position: 'absolute',
		right: 0,
		top: -5
	},
	[`& .${classes.drawerHeader}`]: {
		display: 'flex'
	},
	[`& .${classes.drawerTitle}`]: {
		marginTop: '10px',
		fontSize: '1.5rem'
	},
	[`& .${classes.drawerInputWrapper}`]: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	[`& .${classes.drawerInput}`]: {
		margin: '10px',
		paddingLeft: '5px'
	},
	[`& .${classes.drawerItem}`]: {
		border: '2px solid #eee',
		borderRadius: '5px',
		margin: '10px'
	}
}));

const DrawerComponent = () => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const actionItems = [
		'Improve communication',
		'Create a techdebt board',
		'Talk with the PO',
		'More team outings'
	];

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Root className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="end"
					onClick={handleDrawerOpen}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Drawer
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
					<h1 className={classes.drawerTitle}>Action Items</h1>
				</div>
				<Divider />
				<List>
					{actionItems.map(text => (
						<ListItem className={classes.drawerItem}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<div className={classes.drawerInputWrapper}>
					<Input
						className={classes.drawerInput}
						placeholder="Insert new action here"
					/>
					<IconButton color="primary" aria-label="add new action item">
						<AddBoxIcon />
					</IconButton>
				</div>
			</Drawer>
		</Root>
	);
};

export default DrawerComponent;
