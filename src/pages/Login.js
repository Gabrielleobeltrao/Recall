import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from "../service/fireBaseConfig"
import LogoByOne from "../components/LogoByOne"
import ButtonLoginProvider from "../components/ButtonLoginProvider"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user || googleUser) {
            navigate('/home');
        }
    }, [user, googleUser, navigate]);

    return (
        <div className="flex flex-col justify-center h-dvh py-10 xl:flex-row xl:w-full xl:justify-between xl:h-screen xl:items-center xl:py-16">
            <div className="pt-10 xl:pt-0 xl:w-full">
                <LogoByOne />
                <form onSubmit={handleLogin} className="flex flex-col px-10">
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5 mb-5" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Link 
                        to='/redefinepassword'
                        className="px-2 py-1 w-full text-end font-bold tracking-wide text-sm"
                    >Forgot the password</Link>
                    <div className="flex justify-center w-full pt-5">
                        <button 
                            type="submit"
                            className="bg-gradient-to-r from-pink via-purple to-blue w-3/4 h-8 rounded-xl text-white font-bold tracking-wide text-lg"
                        >Enter</button>
                    </div>
                </form>
                {loading || googleLoading ? <p>Loading...</p> : null}
                <div className="flex gap-2.5 justify-center pt-2.5 font-bold text-sm">
                    <h3>Not have an account yet?</h3>
                    <Link to="/register" className="text-gradient">Create an account here</Link>
                </div>
            </div>
            <div className="px-10 pt-12 xl:pt-0 xl:h-full">
                <div className="w-full h-1 bg-gradient-to-r from-pink via-purple to-blue xl:h-full xl:w-1"/>
            </div>
            <div className="flex flex-col justify-around gap-6 pt-14 px-10 xl:w-full">
                <ButtonLoginProvider nameProvider='Google' onClick={() => signInWithGoogle()}/>
            </div>
        </div>
    )
}

export default Login