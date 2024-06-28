import { useState } from "react";
import LogoByOne from "../components/LogoByOne";
import { Link, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from "../service/fireBaseConfig";

function RedefinePassword() {
    const [email, setEmail] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email) {
            await sendPasswordResetEmail(email)
            alert('Email de redefinição de senha enviado!')
            navigate('/login')
        } else {
            alert('Por favor, insira um email válido.')
        }
    }
    
    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="w-full pb-28 xl:w-1/2">
                <div className="w-full">
                    <LogoByOne />
                </div>
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col items-center w-full px-16"
                >
                    <h3 className="font-bold text-base pb-5 xl:text-lg">Enter your email to reset password</h3>
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5 mb-8" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button 
                        type="submit"
                        className="bg-gradient-to-r from-pink via-purple to-blue w-3/4 h-8 rounded-xl text-white font-bold tracking-wide text-lg"
                    >Send email</button>
                </form>
                {sending && <p>Sending email...</p>}
                {error && <p className="text-red-500">{error.message}</p>}
                <div className="flex gap-2.5 justify-center pt-2.5 font-bold text-sm">
                    <h3>Not have an account yet?</h3>
                    <Link to="/register" className="text-gradient">Create an account here</Link>
                </div>
            </div>
        </section>
    )
}

export default RedefinePassword