import { ReactNode } from "react"
interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
    className?: string;
}


const Button = ({onClick, children, ...rest}:ButtonProps) => {
    return <button onClick={onClick} {...rest} >{children}</button>
}

export default Button;