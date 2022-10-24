import React from 'react'
import { IconButton, Popover } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const EmojiPicker = props => {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelection = event => {
		props.onEmojiSelect(event)
		handleClose()
	}

	const open = Boolean(anchorEl)
	const id = open ? 'emoji-popover' : undefined

	return (
		<div>
			<IconButton
				aria-describedby={id}
				aria-label="emoji-picker"
				style={{ align: 'right' }}
				size="small"
				variant="outlined"
				onClick={handleClick}
			>
				<EmojiEmotionsIcon />
			</IconButton>
			<Popover
				ref={React.createRef()}
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<Picker data={data} onSelect={handleSelection} />
			</Popover>
		</div>
	)
}

export default EmojiPicker
