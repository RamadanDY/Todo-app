import React from 'react'
import './App.css'
import Create from './Create'

const Home = () => {
  return (
    <div>
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="header">My Todo App</div>
                <Create />
            </div>
        </div>
    </div>
  )
}

export default Home