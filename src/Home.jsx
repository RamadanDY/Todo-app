import React from 'react'
import './App.css'
import Create from './Create'
import { useState } from 'react'

const Home = () => {
    // 1.newstate created
    const [todos, setTodos] = useState([]);
  return (
    <div>
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="header">My Todo App</div>
                <Create />
                {/*  */}

                {
                    todos.length === 0 ? 
                    <div><h2>no record</h2></div>
                    :
                
                    todos.map(todo => {
                        <div>
                            {todo}
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home