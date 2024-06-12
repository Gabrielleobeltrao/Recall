import Logo from "../Logo"

function HeaderHome() {
    return (
        <div className="flex justify-between items-center py-5 px-7 xl:min-h-20">
            <Logo className="xl:h-12" />
            <div className="text-end">
                <h2 className="text-sm xl:text-base">gabrielleoaus@gmail.com</h2>
                <button className="text-sm xl:text-base">Sair</button>
            </div>
        </div>
    )
}

export default HeaderHome