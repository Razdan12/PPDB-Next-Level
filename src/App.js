import React from "react";

import Home from "./page/Home";
import Login from "./component/Form/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./admin/Index";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/admin" element={<Index />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
