import React, {useState} from "react";

// Importing custom components
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";
import CreateArea from "./CreateArea";


function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes( prev => {
            return [...prev, newNote]
        });
    }

    function deleteNote(id){
        setNotes(prev => {
            return prev.filter((note, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note 
                key={index} 
                id={index} 
                title={note.title} 
                content={note.content}
                onDelete={deleteNote} />
            ))}
            <Footer />
        </div>    
    );

};


export default App;