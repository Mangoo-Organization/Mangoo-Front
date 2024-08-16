export interface ButtonProps{
    title:string
}

export interface DropdownProps{
    options:string[],
    title:string,
    onOptionClick: (option:string) => void,
    placeholder:string
}