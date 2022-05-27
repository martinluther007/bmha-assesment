import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <Router>
      <div className="App">
      <Toaster/>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
