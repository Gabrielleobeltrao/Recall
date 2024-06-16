import LogoGoogle from "../../assets/logo-google-white.svg"
import LogoApple from "../../assets/logo-apple-white.svg"
import LogoMicrosoft from "../../assets/logo-microsoft-white.svg"

function ButtonLoginProvider({ nameProvider }) {
    let logoProvider

    if(nameProvider === 'Google') {
        logoProvider = LogoGoogle
    } else if (nameProvider === 'Apple') {
        logoProvider = LogoApple
    } else if (nameProvider === 'Microsoft') {
        logoProvider = LogoMicrosoft
    }

    return (
        <button className="bg-gradient-to-r from-pink via-purple to-blue rounded-2xl w-full h-14 text-white font-bold text-sm flex items-center justify-center gap-2.5">
            <h3>Entrar com</h3>
            <img src={logoProvider} alt={`Logo ${nameProvider}`}/>
            <h3 className="w-12">{nameProvider}</h3>
        </button>
    )
}

export default ButtonLoginProvider