import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render(){
    const divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px",
      textAlign: 'center'
    };
    return (
      <div>
        <h1 style={divStyle}>Regulatory News App</h1>
        <div>
          <h4>TODO</h4>
          <ol>
            <li>write layout</li>
            <li>write components</li>
            <li>write rest of the TODOs</li>
          </ol>
        </div>
      </div>
    )
  }
}


export default App;
