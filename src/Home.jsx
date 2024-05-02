import React from 'react'
import './App.css'
import Create from './Create'
import axios from 'axios'
import { useState ,useEffect } from 'react'
// import { MdDelete } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsCircle,  } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";




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
    const reloadApp = () => {
        // Reload the app
        window.location.reload();
    };
    // add another field file inside your todo.js inside server to specify what type we want the checkbox to do ie 
    // should be a boolean 
    // in the next step we want to paers theid inside this handleEffect function
    // after that we create a handleEffect for it t get the id of each data and used that as a key to 
    // either delete the data from both the dom and also the database 
    // go to the serverside and create this API ie for the /get
    const handleEdit = (id) => {
        axios.put('http://localhost:8080/update/'+id)
        .then(result => {reloadApp()})
        .catch(err => console.log(err))

    }

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
                            <div key={todo.id} className="text-2xl font-bold text-red flex items-center justify-between " onClick={()=> handleEdit(todo._id)} >
                                {todo.done ? 
                                // search for this icon rather <bsFillCheckCircleFill></bsFillCheckCircleFill>
                                <BsCircleFill className='icon'></BsCircleFill> 
                                :     
                                <BsCircle className='icon' />
                                }
                                {/* if todo.done is true then add a css effect called line_through with a css property */}
                                <p className={todo.done ? 'line_through' : ''}>{todo.task}</p>
                                <MdDelete className='icon'/>

                                {/* <TbHttpDelete /> */}

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