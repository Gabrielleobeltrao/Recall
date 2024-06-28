import Logo from "../Logo"
import ByOne from "../../assets/ByOne.svg"

function LogoByOne() {
    return (
        <div className="pb-16 xl:pt-0">
            <div className="flex flex-col items-center">
                <Logo className="w-44 h-16"/>
                <img className="w-18 h-10" src={ByOne} alt="By One"/>
            </div>
        </div>
    )
}

export default LogoByOne