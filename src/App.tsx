import GlobalStyle from "../src/styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

import Login from "./pages/Login"; // 로그인 페이지
import Main from "./pages/Main"; // 메인 페이지

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
