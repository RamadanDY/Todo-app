import React from 'react'
import './App.css'

const Create = () => {
  return (
    <div>
        <form>
            <label className="i1">
               <input className="gap" name="name" type="text" />
               <button type="submit">Add</button>
            </label>
        </form>
    </div>
  )
}

export default Create