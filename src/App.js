import React from "react";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProgram from "./components/AddProgram";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/addProgram" element={<AddProgram />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
