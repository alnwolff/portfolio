import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";


export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    );
  }
}
