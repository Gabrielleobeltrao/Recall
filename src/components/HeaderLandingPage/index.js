import Logo from "../Logo"
import { Link } from "react-router-dom"

function HeaderLandingPage() {
    return (
        <div className="flex justify-between items-center py-5 px-7">
            <Logo />
            <Link to="/login" className="flex justify-center items-center w-28 h-8 bg-gradient-to-r from-pink via-purple to-blue rounded-lg">
                <h3 className="text-white text-base font-bold tracking-wide">Entrar</h3>
            </Link>
        </div>
    )
}

export default HeaderLandingPage