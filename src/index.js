import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFunctional from "./components/mainFunctional";
import FilmDetail from "../pages/FilmDetail/filmDetail";
import Navigation from "./components/navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route index element={<MainFunctional />}></Route>
            <Route path="film/:id" element={<FilmDetail />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//render(<App />, document.getElementById("root"));
