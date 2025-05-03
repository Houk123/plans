import { 
    Box, 
    Button,
    Flex, 
    Progress, 
    Stat, 
    VStack, 
    Text 
} from "@chakra-ui/react";
import React from "react";

const DailyTaskTracker: React.FC = () => {
    return (
        <VStack w="100%">
                    <Text>Время</Text>
                    <Flex>
                        <Text>07:00:23</Text>
                        <Button variant="outline">Начать день</Button>
                    </Flex>
                    <Box as="ul">
                        <li>
                        <Stat.Root>
                                <Stat.Label>Создать юнит тесты</Stat.Label>
                                <Stat.ValueText alignItems="baseline">
                                    00<Stat.ValueUnit>:</Stat.ValueUnit>00<Stat.ValueUnit>:</Stat.ValueUnit>00
                                </Stat.ValueText>
                                <Progress.Root 
                                    min={0} 
                                    max={100} 
                                    value={0}
                                    variant="outline"
                                >
                                    <Progress.Track>
                                        <Progress.Range />
                                    </Progress.Track>
                                </Progress.Root>
                            </Stat.Root>
                        </li>
                        <li>
                            <Stat.Root>
                                <Stat.Label>Написать обработчик кнопки</Stat.Label>
                                <Stat.ValueText alignItems="baseline">
                                    01<Stat.ValueUnit>:</Stat.ValueUnit>20<Stat.ValueUnit>:</Stat.ValueUnit>23
                                </Stat.ValueText>
                                <Progress.Root 
                                    min={0} 
                                    max={100} 
                                    value={40}
                                    variant="outline"
                                >
                                    <Progress.Track>
                                        <Progress.Range />
                                    </Progress.Track>
                                </Progress.Root>
                            </Stat.Root>
                        </li>
                        <li>
                            <Stat.Root>
                                <Stat.Label>Сделать верстку главной страницы</Stat.Label>
                                <Stat.ValueText alignItems="baseline">
                                    05<Stat.ValueUnit>:</Stat.ValueUnit>00<Stat.ValueUnit>:</Stat.ValueUnit>00
                                </Stat.ValueText>
                                <Progress.Root 
                                    min={0} 
                                    max={100} 
                                    value={100}
                                    variant="outline"
                                >
                                    <Progress.Track>
                                        <Progress.Range />
                                    </Progress.Track>
                                </Progress.Root>
                            </Stat.Root>
                            <Flex>
                                <Text> 00:00:00 </Text>
                                <Button variant="outline">Начать задачу</Button>
                            </Flex>
                        </li>
                    </Box>
                </VStack>
    )
}

export default DailyTaskTracker;