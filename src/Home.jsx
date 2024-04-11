import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="wrapper">
            <div className="content-wrapper">
                <div className="header">My Todo App</div>
                <form>
                <label className="i1">
                <input className="gap" name="name" type="text" />
                <button type="submit">Add</button>
                </label>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Home