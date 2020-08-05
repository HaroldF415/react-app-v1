import React, {useState} from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function expand(){
      setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">

      {isExpanded && (
        <input 
        onChange={handleChange} 
        value={note.title} 
        name="title" 
        placeholder="Title" 
        type="text" />
      )}

        <textarea 
        onClick={expand}
        onChange={handleChange} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded? 3 : 1} />

        <Zoom in={isExpanded}>        
          <Fab
            onClick={submitNote}><PostAddIcon/>
          </Fab>
        </Zoom> 

      </form>
    </div>
  );
}

export default CreateArea;