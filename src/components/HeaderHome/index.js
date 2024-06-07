import Logo from "../Logo"

function HeaderHome() {
    return (
        <div className="flex justify-between items-center py-5 px-7">
            <Logo />
            <div className="text-end">
                <h2 className="text-sm">gabrielleoaus@gmail.com</h2>
                <button className="text-sm" >Sair</button>
            </div>
        </div>
    )
}

export default HeaderHome