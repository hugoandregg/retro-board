import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Grid, Chip } from "@material-ui/core";
import { Emoji } from "emoji-mart";
import EmojiPicker from "./EmojiPicker"

import {Container, ReactionContainer} from './Task.styled'

const Task = (props) => {
  const [selectedEmojis, setSelectedEmojis] = React.useState([]);
  const [reactions, setReactions] = React.useState(0);

  const handleReactionIncrease = (emoji) => {
    emoji.reactions++;
    setReactions(reactions + 1);
  }

  const handleEmojiSelect = (emoji) => {
    const currentEmoji = selectedEmojis.find(e => e.id === emoji.id);
    if (currentEmoji) {
      handleReactionIncrease(currentEmoji);
    } else {
      emoji.reactions = 1;
      setSelectedEmojis([...selectedEmojis, emoji]);
    }
  };

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
            <Grid container item xs={11} md={11}>
              {props.task.content}
            </Grid>
            <Grid container justify="flex-end" item xs={1} md={1}>
              <EmojiPicker onEmojiSelect={handleEmojiSelect} />
            </Grid>
            <Grid container item alignItems="center">
              {selectedEmojis.map((emoji, index) => {
                return (
                  <ReactionContainer key={`emoji-reaction-${index}`}>
                    <Chip
                      variant="outlined"
                      size="small"
                      aria-label={emoji.name}
                      label={emoji.reactions}
                      avatar={<Emoji key="asd" emoji={emoji} size={18} />}
                      onClick={() => handleReactionIncrease(emoji)}
                    />
                  </ReactionContainer>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
