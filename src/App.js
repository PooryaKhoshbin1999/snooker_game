import Content1 from "./component/content/Content1";
import Header from "./component/header/Header";
import { useState } from "react";
import "./app.css";

function App() {
  return (
    <div className="app w-full h-[100vh] overflow-y-scroll">
      <div className="bg-[#ffffff7c] z-0 w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0">
        <Header />
        <Content1 />
      </div>
    </div>
  );
}

export default App;
