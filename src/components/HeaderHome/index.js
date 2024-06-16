import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../service/fireBaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Logo from "../Logo"

function HeaderHome(props) {

    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error("Error signing out: ", error)
        })
    }

    return (
        <header className="flex justify-between items-center py-5 px-7 xl:min-h-20">
            <Logo className="xl:h-12" />
            <div className="text-end">
                <h2 className="text-sm xl:text-base">{props.email}</h2>
                {user && (
                    <button 
                        onClick={handleLogout}
                        className="text-sm xl:text-base"
                        >Sair
                    </button>
                )}
            </div>
        </header>
    )
}

export default HeaderHome