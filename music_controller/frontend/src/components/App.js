import React, { Component } from "react"
import { render } from "react-dom"
import HomePage from "./HomePage"

export default class App extends Component {
  // prop is just some arguments:
  constructor(props) {
    super(props);
  }

  // return what will be displayed:
  render() {
    return (
      <div className="center">
        <HomePage />
      </div>
    );
  }
}

// Render the App component to the "app" div inside the index.html:
const appDiv = document.getElementById("app");
render(<App />, appDiv);
