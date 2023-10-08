import React from "react";
// import Adminpanel from "./component/Adminpanel/Adminpanel";
import Login from "./component/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
          
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/" element={<Adminpanel/>} />
         
    </Routes>
    </BrowserRouter>
  );
}

export default App;
