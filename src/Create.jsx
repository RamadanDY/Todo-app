import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const Create = () => {
  
  const [task, setTask] = useState('');

  // Function to handle adding task
  const handleAdd = (event) => {
    event.preventDefault(); // Prevent form submission
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => console.log(result))
      .catch()
  
  }

  return (
    <div>
        <form>
            <label className="i1">
               <input className="gap" name="name" type="text" onChange={(event) => setTask(event.target.value)} />
               <button type="button" onClick={handleAdd}>Add</button> {/* Change type to "button" */}
            </label>
        </form>
    </div>
  )
}

export default Create;
