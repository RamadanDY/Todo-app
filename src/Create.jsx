import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const Create = () => {
  //  this stores the input that we do
  const [task, setTask] = useState('');

  const reloadApp = () => {
    // Reload the app
    window.location.reload();
  };

  // Function to handle adding task
  const handleAdd = (event) => {
    event.preventDefault(); // Prevent form submission
    // posting the data and calling the server side 
    axios.post('http://localhost:8080/add', {task : task})
    .then(result => console.log(result)) 
    reloadApp()
    .catch(err => console.log(err))
    
  }

  return (
    <div>
        <form>
            <label className="i1">
              {/* the onchange takes a function the we want to store the new task inside ie the setTask use state
                 the e.target.value targets the new value that is stored inside the settarget useState*/}
               <input className="gap" name="name" type="text" onChange={(e) => setTask(e.target.value)} />
               <button type="button" onClick={handleAdd}>Add</button> {/* Change type to "button" */}

            </label>
        </form>
    </div>
  )
}

export default Create;
