import '@atlaskit/css-reset'
import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './components/Column/Column'
import NavBar from './components/NavBar'
import { BASE_URL } from './constants'
import MuiContainer from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import { Alert } from '@mui/material'

export const Container = styled(MuiContainer)(() => ({
	display: 'flex',
	flexWrap: 'wrap'
}))

const App = () => {
	const [columns, setColumns] = useState({ state: 'pending' })

	useEffect(() => {
		getColumns()
	}, [])

	const getColumns = (showTasks = true) => {
		let params = `?`

		if (showTasks) {
			params += `withTask=true`
		}

		fetch(`${BASE_URL}/column${params}`)
			.then(response => response.json())
			.then(value => setColumns({ state: 'resolved', items: value }))
			.catch(error => setColumns({ state: 'rejected', error }))
	}

	const changeTasksFromColumns = (start, source, finish, destination) => {
		const task = start.tasks[source.index]

		const newStart = [...start.tasks]
		newStart.splice(source.index, 1)

		const newFinish = [...finish.tasks]
		newFinish.splice(destination.index, 0, task)

		const newState = columns.items.map(column => {
			if (column.id === source.droppableId) {
				column.tasks = newStart
			} else if (column.id === destination.droppableId) {
				column.tasks = newFinish
			}

			return column
		})

		setColumns({ state: 'resolved', items: newState })
	}

	const reorderTasks = (start, source, startIndex, destination) => {
		const task = start.tasks[source.index]

		const newStart = [...start.tasks]
		newStart.splice(source.index, 1)
		newStart.splice(destination.index, 0, task)

		const data = {
			...columns,
			items: [...columns.items]
		}
		data.items[startIndex].tasks = newStart

		setColumns({ state: 'resolved', items: data.items })
	}

	const getItemByDroppableId = droppableId =>
		columns.items.find(column => column.id === droppableId)
	const getItemIndexByDroppableId = droppableId =>
		columns.items.findIndex(column => column.id === droppableId)

	const onDragUpdate = update => {
		const { destination } = update

		let opacity = 0

		if (destination) {
			const index = getItemIndexByDroppableId(destination.droppableId)
			opacity = destination.index / columns.items[index].tasks.length
		}

		document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
	}

	const onDragEnd = result => {
		document.body.style.color = 'inherit'
		document.body.style.backgroundColor = 'inherit'
		const { destination, source } = result

		if (!destination) return

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		const start = getItemByDroppableId(source.droppableId)
		const finish = getItemByDroppableId(destination.droppableId)

		// BEHAVIOUR: Re-order items inside the same column
		if (start === finish) {
			reorderTasks(
				start,
				source,
				getItemIndexByDroppableId(source.droppableId),
				destination
			)
			return
		}

		// BEHAVIOUR: Moving from one list to another
		changeTasksFromColumns(start, source, finish, destination)
	}

	if (columns.state === 'pending') {
		return <div>Loading...</div>
	}

	if (columns.state === 'rejected') {
		return (
			<div>
				Error: <pre>{JSON.stringify(columns.error, null, 2)}</pre>
			</div>
		)
	}

	return (
		<React.Fragment>
			<NavBar />
			{columns && columns?.items?.length > 0 ? (
				<DragDropContext onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
					<Container>
						{columns.items.map(column => {
							const tasks = column.tasks
							return <Column key={column.id} column={column} tasks={tasks} />
						})}
					</Container>
				</DragDropContext>
			) : (
				<MuiContainer style={{ marginTop: '20px' }}>
					<Alert severity="warning">Oops, there's nothing here yet! :( </Alert>
				</MuiContainer>
			)}
		</React.Fragment>
	)
}

export default App
