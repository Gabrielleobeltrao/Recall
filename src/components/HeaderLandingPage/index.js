import Logo from "../Logo"
import { Link } from "react-router-dom"

function HeaderLandingPage() {
    return (
        <div className="flex fixed w-full justify-between items-center py-5 px-7 bg-white xl:min-h-20">
            <Logo className="xl:h-12" />
            <Link to="/login" className="flex justify-center items-center w-28 h-8 bg-gradient-to-r from-pink via-purple to-blue rounded-lg xl:w-32 xl:h-9">
                <h3 className="text-white text-base font-bold tracking-wide xl:text-xl">Entrar</h3>
            </Link>
        </div>
    )
}

export default HeaderLandingPage