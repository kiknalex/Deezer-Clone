import { ReactNode } from "react"
interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
}


const Button = ({onClick, children, ...rest}:ButtonProps) => {
    return <button onClick={onClick} {...rest} >{children}</button>
}

export default Button;