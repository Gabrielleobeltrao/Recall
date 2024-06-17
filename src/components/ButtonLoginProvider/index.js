import LogoGoogle from "../../assets/logo-google-white.svg"

function ButtonLoginProvider({ nameProvider, onClick }) {
    let logoProvider

    if(nameProvider === 'Google') {
        logoProvider = LogoGoogle
    }

    return (
        <button 
            onClick={onClick}
            className="bg-gradient-to-r from-pink via-purple to-blue rounded-2xl w-full h-14 text-white font-bold text-sm flex items-center justify-center gap-2.5"
        >
            <h3>Entrar com</h3>
            <img src={logoProvider} alt={`Logo ${nameProvider}`}/>
            <h3 className="w-12">{nameProvider}</h3>
        </button>
    )
}

export default ButtonLoginProvider