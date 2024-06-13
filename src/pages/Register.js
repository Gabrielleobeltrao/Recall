import { Link } from "react-router-dom"
import LogoByOne from "../components/LogoByOne"

function Register() {
    return (
        <div className="w-screen h-screen flex items-center xl:justify-center xl:items-center xl:py-16">
            <div className="w-full pb-28 xl:w-1/2">
                <LogoByOne className="pb-16 xl:pt-0"/>
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
                <div className="flex justify-center w-full pt-10">
                    <button 
                        className="bg-gradient-to-r from-pink via-purple to-blue w-2/4 h-8 rounded-xl text-white font-bold tracking-wide text-lg"
                    >Criar</button>
                </div>
                <div className="flex gap-2.5 justify-center pt-2.5 font-bold text-sm">
                    <h3>Ja tem uma conta?</h3>
                    <Link to="/login" className="text-gradient">Entre na sua conta aqui</Link>
                </div>
            </div>
        </div>
    )
}

export default Register