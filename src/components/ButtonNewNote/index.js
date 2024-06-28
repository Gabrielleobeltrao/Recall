import IconNewNote from "../../assets/NewNode.svg"

function BottonNewNote({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-black p-4 rounded-full fixed bottom-5 right-5 z-0"
        >
            <img className="w-11 h-11" src={IconNewNote} alt="NewNode" />
        </button>
    )
}

export default BottonNewNote