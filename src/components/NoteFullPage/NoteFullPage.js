import BottomLeftIconRecall from "../../assets/BottomLeftIconRecall.svg"
import IconeXWhite from "../../assets/XWhite.svg"
import IconEdit from "../../assets/IconEdit.svg"
import IconTrash from "../../assets/IconTrash.svg"

function NoteFullPage() {
    return (
        <div className="w-screen h-[calc(100%-84px)] z-10 absolute flex flex-col items-center">
            <div className="bg-pink w-[calc(100%-5rem)] z-20 rounded-tr-2xl rounded-tl-2xl flex flex-col items-center">
                <img className="w-7 h-7 self-end mt-5 mr-5" src={IconeXWhite} alt="Fechar janela" />
                <div className="flex flex-col py-5 px-5 gap-3.5 text-white w-full">
                    <h3 className="font-bold tracking-wide text-xl break-all">Titulo da Anotação</h3>
                    <h4 className="text-base break-all">Texto da Anotação</h4>
                </div>
                <div className="bg-white w-[calc(100%-2.5rem)] h-1.5 rounded-full my-4"/>
            </div>
            <div className="flex w-[calc(100%-5rem)] pb-20 z-20">
                <div className="bg-pink w-full rounded-bl-2xl flex items-center justify-between px-8 pb-4">
                    <img src={IconEdit} alt="Edit butoom"/>
                    <img src={IconTrash} alt="Trash butoom"/>
                </div>
                <div>
                    <img src={BottomLeftIconRecall} alt="#" />
                </div>
            </div>
            <div className="bg-white opacity-90 w-screen h-screen fixed top-0 left-0 z-10"/>
        </div>
    )
}

export default NoteFullPage