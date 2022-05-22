import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { AgentPage } from "./components/AgentPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path="/" exact/>
        <Route element={<AgentPage/>} path="/agents"/>
        <Route element={<p>Error Not Found</p>} path="*"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
