import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const Create = () => {
  const [task, setTask] = useState('');

  // Function to handle adding task
  const handleAdd = (event) => {
    event.preventDefault(); // Prevent form submission
    // posting the data and calling the server side 
    axios.post('http://localhost:3000/add', {tast : task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }

  return (
    <div>
        <form>
            <label className="i1">
              {/* the onchange takes a function the we want to store the new task inside the setTask use state
                 the e.target.value targets the new value that is stored inside the settarget useState*/}
               <input className="gap" name="name" type="text" onChange={(event) => setTask(event.target.value)} />
               <button type="button" onClick={handleAdd}>Add</button> {/* Change type to "button" */}
            </label>
        </form>
    </div>
  )
}

export default Create;
