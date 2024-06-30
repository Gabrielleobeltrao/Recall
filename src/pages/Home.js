import React, { useState, useEffect } from 'react'
import HeaderHome from "../components/HeaderHome"
import Note from "../components/Note"
import FormEditNote from "../components/FormEditNote"
import FormNewNote from "../components/FormNewNote"
import BottonNewNote from "../components/ButtonNewNote"
import NoteFullPage from '../components/NoteFullPage'
import { auth, db } from "../service/fireBaseConfig"
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

function Home() {
    const [user] = useAuthState(auth)
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleNote, setIsVisibleNote] = useState(false)
    const [isVisibleEditForm, setIsVisibleEditForm] = useState(false)
    const [note, setNote] = useState(null)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        if (user) {
            const loadNotes = async () => {
                const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'notes'))
                const userNotes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setNotes(userNotes);
            };
            loadNotes()
        }
    }, [user])

    const addNote = async (newNote) => {
        if (user) {
            const docRef = await addDoc(collection(db, 'users', user.uid, 'notes'), newNote)
            setNotes([{ id: docRef.id, ...newNote }, ...notes])
        }
    };

    const deleteNote = async (noteToDelete) => {
        if (user) {
            const noteRef = doc(db, 'users', user.uid, 'notes', noteToDelete.id)
            await deleteDoc(noteRef)
            setNotes(notes.filter(note => note.id !== noteToDelete.id))
            setIsVisibleNote(false)
        }
    };

    const editNote = async (noteToEdit, updatedNote) => {
        if (user) {
            const noteRef = doc(db, 'users', user.uid, 'notes', noteToEdit.id)
            await updateDoc(noteRef, updatedNote)
            const updatedNotes = notes.map(note =>
                note.id === noteToEdit.id ? { id: noteToEdit.id, ...updatedNote } : note
            );
            setNotes(updatedNotes)
            setNote(updatedNote)
            setIsVisibleEditForm(false)
        }
    };

    const handleNoteClick = (note) => {
        setNote(note)
        setIsVisibleNote(true)
    };

    return (
        <div>
            <HeaderHome email={user.email} />
            <div className="flex flex-wrap px-4 pb-28">
                {notes.map((note, index) => (
                    <div 
                        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'
                        key={note.id} 
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