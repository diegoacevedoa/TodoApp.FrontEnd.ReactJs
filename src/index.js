import React from "react";
import ReactDOM from "react-dom/client";
// import TodoApp from "./components/Reducer/TodoApp/TodoApp";
// import Example from "./components/elements/example";
// import { Example2 } from "./components/elements/example2/Example2";
// import "./components/elements/example2/example2.css";
import { MainApp } from "./components/Context/MainApp";
// import Reducer from "./components/Reducer/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Example nombre="Tierra 1" lenguaje="React" value={10} />
    <Example2 />
    <Reducer /> */}
    <MainApp />
    {/* <TodoApp /> */}
  </>
);
