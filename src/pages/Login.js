import { Link } from "react-router-dom"
import LogoByOne from "../components/LogoByOne"

function Login() {
    return (
        <div className="xl:flex xl:w-full xl:justify-between xl:h-screen xl:items-center xl:py-16">
            <div className="xl:w-full">
                <LogoByOne className="pt-24 pb-16 xl:pt-0"/>
                <div className="flex flex-col gap-5 px-16">
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                    />
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    className="px-16 py-1 w-full text-end font-bold tracking-wide text-sm"
                >Esqueci a senha</button>
                <div className="flex justify-center w-full pt-5">
                    <button 
                        className="bg-gradient-to-r from-pink via-purple to-blue w-2/4 h-8 rounded-xl text-white font-bold tracking-wide text-lg"
                    >Entrar</button>
                </div>
                <div className="flex gap-2.5 justify-center pt-2.5 font-bold text-sm">
                    <h3>Ainda não tem uma conta?</h3>
                    <Link to="/register" className="text-gradient">Crie uma conta aqui</Link>
                </div>
            </div>
            <div className="px-10 pt-12 xl:pt-0 xl:h-full">
                <div className="w-full h-1 bg-gradient-to-r from-pink via-purple to-blue xl:h-full xl:w-1"/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Login