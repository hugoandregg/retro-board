import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Container = styled(MuiContainer)(() => ({
	margin: '8px',
	border: '1px solid lightgrey',
	borderRadius: '2px',
	width: '220px',
	display: 'flex',
	flexDirection: 'column'
}));

export const Title = styled(() => <Typography component="h3" />)(() => ({
	padding: '8px'
}));

export const TaskList = styled(MuiContainer)(props => ({
	padding: '8px',
	transition: 'background-color 0.2 ease',
	backgroundColor: props.isDraggingOver ? 'skyblue' : 'white',
	flexGrow: 1,
	minHeight: '100px'
}));
