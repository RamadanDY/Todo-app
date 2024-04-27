import React from 'react'
import './App.css'
import Create from './Create'
import { useState } from 'react'

const Home = () => {
    // to store and display out text using the map method
    const [todos, setTodos] = useState([]);
  return (
    <div>
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="header">My Todo App</div>
                <Create />
                {/*  */}

                {/* if (todos.length === 0 ){
                    <div>
                        <h2>no record</h2>
                    </div>

                }else {
                    todos.map((todo) =>{
                        <div>
                            {todo}
                        </div>

                    })
                } */}

                {


                    todos.length === 0 ? 
                    <div><h2>no records</h2></div>
                    :
                    // The map method is a way to loop over each item in an array and perform some
                    //  operation on each item.
                    // right now because of the {todo} ,its empty 
                    // so above us is a condition
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