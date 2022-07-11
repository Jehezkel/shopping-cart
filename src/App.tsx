import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-200 dark:bg-slate-900">
      <Header></Header>
    </div>
  );
}

export default App;
