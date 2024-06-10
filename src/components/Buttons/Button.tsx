
const Button = ({onClick, ...rest}) => {
    return <button onClick={onClick} {...rest} >Hello</button>
}

export default Button;