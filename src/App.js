import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="header">My Todo App</div>
        <form>
          <label className="i1">
            <input className="gap" type="text" name="name" />
            <input type="submit" value="Submit" />
          </label>
          <label className="i2">
            <input className="gap" type="text" name="name" />
            <input type="submit" value="Submit" />
          </label>
          <label className="i3">
            <input className="gap" type="text" name="name" />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default App;
