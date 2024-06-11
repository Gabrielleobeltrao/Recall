import React, { useState } from 'react';
import HeaderHome from "../components/HeaderHome"
import Note from "../components/Note"
import FormEditNote from "../components/FormEditNote"
import FormNewNote from "../components/FormNewNote"
import BottonNewNote from "../components/ButtonNewNote"
import NoteFullPage from '../components/NoteFullPage';

function Home() {

    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleNote, setIsVisibleNote] = useState(false)
    const [isVisibleEditForm, setIsVisibleEditForm] = useState(false)
    const [note, setNote] = useState(null);
    const [notes, setNotes] = useState([
        {title:"Esse é o primeiro teste", text:"Estou testando as notes da Recall", color:"blue"},
    ])

    const addNote = (newNote) => {
        setNotes([newNote, ...notes]);
    };

    const deleteNote = (noteToDelete) => {
        setNotes(notes.filter(note => note !== noteToDelete))
        setIsVisibleNote(false)
    }

    const editNote = (noteToEdit, updatedNote) => {
        const updatedNotes = notes.map(note =>
            note === noteToEdit ? updatedNote : note
        );
        setNotes(updatedNotes);
        setIsVisibleEditForm(false);
        setIsVisibleNote(false);
    };

    const handleNoteClick = (note) => {
        setNote(note)
        setIsVisibleNote(true)
    };

    return (
        <div>
            <HeaderHome />
            <div className="flex flex-wrap justify-around items-start px-4">
                {notes.map((note, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleNoteClick(note)}
                    >
                        <Note 
                            title={note.title}
                            text={note.text}
                            color={note.color}
                        />
                    </div>
                ))}
            </div>
            <section>
                <FormEditNote 
                isVisibleEditForm={isVisibleEditForm}
                setIsVisibleEditForm={() => setIsVisibleEditForm(false)}
                note={note}
                editNote={editNote}
                />
                <div className={`bg-black w-screen h-screen fixed top-0 left-0 z-30 transition-opacity duration-1000 ease-in-out ${isVisibleEditForm ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}/>
            </section>
            <section>
                <NoteFullPage 
                    isVisibleNote={isVisibleNote}
                    onClickVisibility={() => setIsVisibleNote(false)}
                    note={note}
                    setIsVisibleEditForm={() => setIsVisibleEditForm(true)}
                    deleteNote={deleteNote}
                />
                <div className={`bg-white w-screen h-screen fixed top-0 left-0 z-10 transition-opacity duration-1000 ease-in-out ${isVisibleNote ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}/>
            </section>
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