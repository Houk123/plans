"use client";

import { useNotBusyTaskApi } from "@/hooks/api/task";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import React from "react";

const ListTaskDefault: React.FC = () => {
    const {
        isLoading,
        isError,
        error,
        data: tasks,
    } = useNotBusyTaskApi();

    if(isLoading) return <></>;
    if(isError) return <>{error}</>;

    return (
        <Box as="section">
            <Box as="ul">
                {
                    tasks?.map(task => (
                        <Flex 
                            key={task.id}
                            borderRadius=".375rem"
                            paddingInline=".5rem"
                            paddingBlock=".25rem"
                            marginBlock=".375rem"
                            border=".1rem solid gray" 
                            alignItems="center" 
                            justifyContent="space-between" 
                            width="25rem"
                        >
                            <Text key={task.id}>{task.name} </Text>
                            <IconButton variant="outline">
                                <Plus />
                            </IconButton>
                        </Flex>
                    ))
                }
            </Box>
        </Box>
    );
}

export default ListTaskDefault;