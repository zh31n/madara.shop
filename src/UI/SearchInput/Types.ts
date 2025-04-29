import * as React from "react";

export interface SearchInputProps {
    img?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    width?: number,
    placeholder?: string,
    type?: string,
}