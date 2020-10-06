import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Grid, Chip } from "@material-ui/core";
import { Emoji } from "emoji-mart";
import EmojiPicker from "./emojipicker"

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

const ReactionContainer = styled.div`
  margin-right: 4px;
`;

const Task = (props) => {
  const [selectedEmojis, setSelectedEmojis] = React.useState([]);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmojis([...selectedEmojis, emoji]);
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
                  <ReactionContainer>
                    <Chip
                      key={`emoji-reaction-${index}`}
                      variant="outlined"
                      size="small"
                      aria-label={emoji.name}
                      label="1"
                      avatar={<Emoji key="asd" emoji={emoji} size={18} />}
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
