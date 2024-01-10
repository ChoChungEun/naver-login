import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import RedirectURI from "./RedirectURI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  //   <Router>
  //     <Routes>
  //       <Route path="/naver-login" element={<App />} />
  //       <Route path="/auth/naver/callback" element={<RedirectURI />} />
  //     </Routes>
  //   </Router>
);
