import React from "react";
// import Adminpanel from "./component/Adminpanel/Adminpanel";
import Login from "./component/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateChapter from "./component/Adminpanel/UpdateChapter";
import CreateChapter from "./component/Adminpanel/CreateChapter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CreateChapter />} />
        <Route path="/update" element={<UpdateChapter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
