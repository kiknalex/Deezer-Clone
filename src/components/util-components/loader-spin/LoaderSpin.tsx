import { spinWrapper, spinner } from "./LoaderSpin.css"

const LoaderSpin = () => {
    return (
        <div className={spinWrapper}>
            <div className={spinner}></div>
        </div>
    )
}

export default LoaderSpin;