import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";
import ToDoList from "./ToDoList.js";

let destination = document.querySelector("#container");
/*
ReactDOM.render(
  <div>
    <p>Hello</p>
    <ToDoList />
  </div>,
  destination
); */

const root = ReactDOMClient.createRoot(destination);

root.render(
  <div>
    <ToDoList />
  </div>
);
