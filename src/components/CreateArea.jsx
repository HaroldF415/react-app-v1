import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {value, name} = event.target;

        setNote( prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }

    //DEFAULT BEHAVIOUR OF FORMS & BUTTONS are that they refresh the page when clicked the following function will handle this behaviour 
    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        
        // This will reset the inputArea / textArea
        setNote({
            title: "",
            content: ""
        });
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" type="text" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button
        onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;