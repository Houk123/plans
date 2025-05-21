"use client"

import { CloseButton, Input, InputGroup } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Search } from "lucide-react";

const SearchInput: React.FC = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null)

    const endElement = value ? (
    <CloseButton
        size="xs"
        onClick={() => {
        setValue("")
        inputRef.current?.focus()
        }}
        me="-2"
    />
    ) : undefined

    return (
        <InputGroup startElement={<Search />} endElement={endElement}>
            <Input 
                variant="subtle"
                ref={inputRef}
                placeholder="Поиск"
                value={value}
                onChange={(e) => {
                setValue(e.currentTarget.value)
                }}
            />
        </InputGroup>
    )
}

export default SearchInput;