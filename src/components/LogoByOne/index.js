import Logo from "../Logo"
import ByOne from "../../assets/ByOne.svg"

function LogoByOne(props) {
    return (
        <div className={props.className}>
            <div className="flex flex-col items-center">
                <Logo className="w-44 h-16"/>
                <img className="w-18 h-10" src={ByOne} alt="By One"/>
            </div>
        </div>
    )
}

export default LogoByOne