import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Grid, IconButton, Popover, Chip } from "@material-ui/core"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const Task = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedEmojis , setSelectedEmojis ] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmojis([...selectedEmojis, emoji ])
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Grid container alignItems="center">
            <Grid container item xs={11} md={11}>{props.task.content}</Grid>
            <Grid container justify="flex-end" item xs={1} md={1}>
              <IconButton aria-describedby={id} aria-label="delete" style={{align:'right'}} size="small" variant="outlined" onClick={handleClick}>
                <InsertEmoticonIcon />
              </IconButton>
            </Grid>
            <Grid container item alignItems="center">
              {selectedEmojis.map((emoji, index) => {
                
                return <Chip 
                        key={`emoji-reaction-${index}`} 
                        variant="outlined" 
                        size="small" 
                        label={emoji.name}
                        avatar={ <Emoji key="asd" emoji={emoji} size={20}/> } />
                })
              }
            </Grid>
          </Grid>
          <Popover
            ref={React.createRef()}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Picker onSelect={handleEmojiSelect} />
          </Popover>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
