import React, { useState } from 'react';
import HeaderHome from "../components/HeaderHome"
import Note from "../components/Note"
import FormNewNote from "../components/FormNewNote"
import BottonNewNote from "../components/ButtonNewNote"

function Home() {

    const [notes, setNotes] = useState([
        {title:"Esse é o primeiro teste", text:"Estou testando as notes da Recall", color:"blue"},
    ])

    const addNote = (newNote) => {
        setNotes([newNote, ...notes]);
    };

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <HeaderHome />
            <div className="flex flex-wrap justify-around items-start px-4">
                {notes.map((note, index) => (
                    <Note 
                        key={index}
                        title={note.title}
                        text={note.text}
                        color={note.color}
                    />
                ))}
            </div>
            <section>
                <FormNewNote 
                    isVisible={isVisible} 
                    onClickVisibility={() => setIsVisible(false)}
                    addNote={addNote}
                />
                <div className={`bg-black w-screen h-screen fixed top-0 left-0 z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}/>
            </section>
            <BottonNewNote 
                onClick={() => setIsVisible(true)}
            />
        </div>
    )
}

export default Home