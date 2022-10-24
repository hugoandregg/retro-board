import * as React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const Container = styled('div')(() => ({
	margin: '8px',
	border: '1px solid lightgrey',
	borderRadius: '2px',
	width: '300px',
	display: 'flex',
	flexDirection: 'column'
}))

export const Title = styled(() => <Typography component="h3" />)(() => ({
	padding: '8px'
}))

export const TaskList = styled('div')(props => ({
	padding: '8px',
	transition: 'background-color 0.2 ease',
	backgroundColor: props.isDraggingOver ? 'skyblue' : 'white',
	flexGrow: 1,
	minHeight: '100px'
}))
