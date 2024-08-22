export interface ButtonProps{
    title:string
    extra?: boolean
}

export interface InputProps{
    placeholder: string,
    title?: string
}
export interface DropdownProps{
    options:string[],
    title:string,
    onOptionClick: (option:string) => void,
    placeholder:string
}