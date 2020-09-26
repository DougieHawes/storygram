import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";

import "./style.css";

import Header from "./components/layout/Header";

import Posts from "./components/routes/public/Posts";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={Posts} />
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
