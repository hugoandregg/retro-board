import "emoji-mart/css/emoji-mart.css";
import React from "react";
import { IconButton, Popover } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Picker } from "emoji-mart";

const EmojiPicker = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "emoji-popover" : undefined;

    return <div>
        <IconButton
            aria-describedby={id}
            aria-label="emoji-picker"
            style={{ align: "right" }}
            size="small"
            variant="outlined"
            onClick={handleClick}
        >
            <InsertEmoticonIcon />
        </IconButton>
        <Popover
            ref={React.createRef()}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <Picker onSelect={props.onEmojiSelect} />
        </Popover>
    </div>
}

export default EmojiPicker