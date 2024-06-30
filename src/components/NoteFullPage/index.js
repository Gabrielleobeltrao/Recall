import BottomLeftIconRecall from "../../assets/BottomLeftIconRecall.svg"
import IconeXWhite from "../../assets/XWhite.svg"
import IconEdit from "../../assets/IconEdit.svg"
import IconTrash from "../../assets/IconTrash.svg"

function NoteFullPage({ isVisibleNote, onClickVisibility, note, deleteNote, setIsVisibleEditForm }) {
    return (
        <div className={`w-full fixed flex flex-col items-center top-20 z-20 transform transition-transform duration-700 ${isVisibleNote ? 'translate-x-0' : '-translate-x-dvw'}`}>
            <div 
                className="w-screen max-w-2xl h-[calc(100%-10rem)] flex flex-col items-center"
            >
                <div className={`flex justify-end bg-${note ? note.color : 'pink'} w-[calc(100%-5rem)] rounded-tr-2xl rounded-tl-2xl pb-5`}>
                    <img
                        onClick={onClickVisibility}
                        className="w-7 h-7 mt-5 mr-5"
                        src={IconeXWhite}
                        alt="Fechar janela" 
                    />
                </div>
                <div className={`bg-${note ? note.color : 'pink'} w-[calc(100%-5rem)] z-20 flex flex-col items-center overflow-y-auto`}>
                    <div className="flex flex-col px-5 gap-3.5 text-white w-full h-full">
                        <h3 className="font-bold tracking-wide text-xl break-words whitespace-pre-line">{note ? note.title : ''}</h3>
                        <h4 className="text-base break-words whitespace-pre-line pb-5">{note ? note.text : ''}</h4>
                    </div>
                </div>
                <div className="flex w-[calc(100%-5rem)] z-20 relative pr-16">
                    <div className={`bg-${note ? note.color : 'pink'} w-full rounded-bl-2xl flex flex-col items-center justify-between px-4 pb-2.5`}>
                        <div className="bg-white w-full h-1.5 rounded-full mb-2.5"/>
                        <div className="flex w-full justify-between px-4">
                            <img
                                onClick={() => setIsVisibleEditForm()}
                                src={IconEdit}
                                alt="Edit butoom"
                            />
                            <img
                                onClick={() => deleteNote(note)}
                                src={IconTrash}
                                alt="Trash butoom"
                            />
                        </div>
                    </div>
                    <img className="w-16 absolute bottom-0 right-0 z-10" src={BottomLeftIconRecall} alt="#" />
                    <div className={`h-7 w-7 absolute right-12 z-0 bg-${note ? note.color : 'pink'}`} />
                </div>
            </div>
        </div>
    )
}

export default NoteFullPage