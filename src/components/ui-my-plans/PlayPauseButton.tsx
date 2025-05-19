import React from "react";

import { IconButton } from "@chakra-ui/react";
import { Pause, Play } from "lucide-react";

interface IPlayPauseButtonProps{
    handlePlay: () => void,
    isRunning: boolean
}

const PlayPauseButton: React.FC<IPlayPauseButtonProps> = (props) => {
    const {
        handlePlay,
        isRunning
    } = props;
    return (
        <IconButton 
                aria-label="Play"
                onClick={handlePlay}
        >
            {isRunning ? <Pause /> : <Play/>}
        </IconButton>
    );
}

export default PlayPauseButton;