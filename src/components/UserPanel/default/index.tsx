"use client";
import { Avatar, Button, Card, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const UserPanelDefault: React.FC = () => {
    return (
        <Card.Root size="sm" variant="subtle">
            <Card.Body>
                <HStack gap="4">
                    <Avatar.Root>
                        <Avatar.Fallback name="Ярослав Найденов" />
                        <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd" />
                    </Avatar.Root>
                    <Stack gap="0">
                        <Text fontWeight="medium">Ярослав Найденов</Text>
                        <Text color="fg.muted" textStyle="sm">
                            houk123c@yandex.ru
                        </Text>
                    </Stack>
                </HStack>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline" size="xs">
                    Выйти
                </Button>
                <Button variant="outline" size="xs">
                    Настройки
                </Button>
            </Card.Footer>
        </Card.Root>
        
    );
}

export default UserPanelDefault;