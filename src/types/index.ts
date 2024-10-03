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

export interface CheckboxProps{
    content?: string,
    checked?: boolean;     
    onChange?: () => void;
    
}

export interface SidebarProps{
    minhaConta:string,
    instituicao:string,
    token:string,
}

export interface NavBarProps{
    isLogIn?: boolean
}