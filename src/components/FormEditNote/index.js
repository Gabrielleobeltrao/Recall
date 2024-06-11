import React, { useState, useEffect } from 'react';
import IconeX from "../../assets/x.svg"

function FormEditNote({ isVisibleEditForm, setIsVisibleEditForm, note, editNote }) {

    const [title, setTitle] = useState(note?.title || "")
    const [text, setText] = useState(note?.text || "")
    const [color, setColor] = useState(note?.color || "pink")

    useEffect(() => {
        if (note) {
            setTitle(note.title)
            setText(note.text)
            setColor(note.color)
        }
    }, [note]);

    const handleSave = () => {
        const updatedNote = { ...note, title, text, color }
        editNote(note, updatedNote)
    };

    return (
        <div className={`w-screen h-screen fixed top-0 left-0 z-40 transform transition-transform duration-700 ${isVisibleEditForm ? 'translate-x-0' : '-translate-x-dvw'}`}>
            <div className="bg-white w-[calc(100%-5rem)] h-[calc(100%-5rem)] top-10 left-10 fixed z-20 rounded-2xl flex flex-col items-center">
                <img
                    onClick={() => setIsVisibleEditForm()}
                    className="w-7 h-7 self-end mt-5 mr-5" 
                    src={IconeX} 
                    alt="Fechar janela" 
                />
                <h3 className="font-bold text-xl pt-7 pb-12">Editar Anotação</h3>
                <div className="w-full h-full px-5 flex flex-col gap-9">
                    <textarea
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-neutral-200 rounded-2xl w-full h-1/6 px-3 font-bold py-1.5 placeholder:text-black placeholder:text-base"
                        placeholder="Titulo"
                        value={title}
                    />
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        className="bg-neutral-200 rounded-2xl w-full h-5/6 px-3 py-1.5 placeholder:text-black placeholder:text-sm"
                        placeholder="Texto"
                        value={text}
                    />
                </div>
                <div className="flex flex-row justify-between w-full px-14 pt-11">
                    <input
                    onChange={() => setColor("pink")}
                    className="w-12 h-12 appearance-none bg-pink rounded-full border-0 checked:border-black checked:border-5 checked:border-solid"
                    type="radio"
                    name="selectColor"
                    value="pink"
                    checked={color === "pink"}
                    />
                    <input
                    onChange={() => setColor("pink-purple")}
                    className="w-12 h-12 appearance-none bg-pink-purple rounded-full border-0 checked:border-black checked:border-5 checked:border-solid"
                    type="radio"
                    name="selectColor"
                    value="pink-purple"
                    checked={color === "pink-purple"}
                    />
                    <input
                    onChange={() => setColor("purple-blue")}
                    className="w-12 h-12 appearance-none bg-purple-blue rounded-full border-0
                    checked:border-black checked:border-5 checked:border-solid"
                    type="radio"
                    name="selectColor"
                    value="purple-blue"
                    checked={color === "purple-blue"}
                    />
                    <input
                    onChange={() => setColor("blue")}
                    className="w-12 h-12 appearance-none bg-blue rounded-full border-0
                    checked:border-black checked:border-5 checked:border-solid"
                    type="radio"
                    name="selectColor"
                    value="blue"
                    checked={color === "blue"}
                    />
                </div>
                <button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-pink via-purple to-blue w-2/4 min-h-14 rounded-lg text-white font-bold mt-11 mb-7"
                >Salvar Alterações</button>
            </div>
        </div>
    )
}

export default FormEditNote