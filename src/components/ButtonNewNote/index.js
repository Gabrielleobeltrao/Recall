import IconNewNote from "../../assets/NewNode.svg"

function BottonNewNote() {
    return (
        <button className="bg-black p-4 rounded-full fixed bottom-5 right-5">
            <img className="w-11 h-11" src={IconNewNote} alt="NewNode" />
        </button>
    )
}

export default BottonNewNote