import React from 'react'
import './App.css'
import Create from './Create'
import axios from 'axios'
import { useState ,useEffect } from 'react'

const Home = () => {
    // to store and display out text using the map method
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
        // we will use axios to fetch the data
        // always remmber to specify your route and create the get api somewhere
        // in this case its our index.js  
        axios.get('http://localhost:8080/get')
        // this case we want the data that was updated inside the settodo
        // we will store our result or data inside our setTodo
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))

    },[])

  return (
    <div>
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="header">My Todo App</div>
                <Create />
               
                {


                    todos.length === 0 ? 
                    <div><h2>no records</h2></div>
                    
                    :
                    // The map method is a way to loop over each item in an array and perform some
                    //  operation on each item.
                    // right now because of the {todo} ,its empty 
                    // so above us is a condition
                    // The primary purpose of key is to provide a unique identifier for each element.
                    todos.map(todo => {
                        return (
                            <div key={todo.id} className="text-3xl font-bold underline" >
                                {todo.task}
                            </div>
                        );
                    })
                    
                }
            </div>
        </div>
    </div>
  )
}

export default Home