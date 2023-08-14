import GlobalStyle from "../src/styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import Index from "./pages/index"; // 시작 페이지

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
