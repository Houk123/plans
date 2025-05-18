import React from "react"

import { useStopwatch } from "@/hooks/time/useStopwatch";
import { Button, Flex, Text } from "@chakra-ui/react";

const GlobalsTracker: React.FC = () => {
    const {
            start, stop, 
            time, formattedTime
    } = useStopwatch({});
    return (
        <Flex>
            <Text>Время</Text>
            <Text>{formattedTime(time)}</Text>
            <Button variant="outline" onClick={start}>Начать день</Button>
            <Button variant="outline" onClick={stop}>Закончить день</Button>
        </Flex>
    );
}

export default GlobalsTracker;