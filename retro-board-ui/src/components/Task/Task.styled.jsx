import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const Container = styled(MuiContainer)(props => ({
	border: '1px solid lightgrey',
	borderRadius: '2px',
	padding: '8px',
	marginBottom: '8px',
	backgroundColor: props.isDragging ? 'lightgreen' : 'white'
}));

export const ReactionContainer = styled(MuiContainer)(() => ({
	marginRight: '4px'
}));
