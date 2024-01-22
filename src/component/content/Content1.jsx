import FirstPage from "../../preComponent/firstPage/firstPage";
import SecondPage from "../../preComponent/secondPage/SecondPage";
import ThirdPage from "../../preComponent/thirdPage/ThirdPage";
import Forthpage from "../../preComponent/forthPage/ForthPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import context from "../../context/app.context";

const Content1 = () => {
  const [players , setPlayers] = useState([]);
  const [name , setName] = useState('');
  return (
  <div className="w-full h-[83.2vh] z-2 overflow-y-scroll">
    <context.Provider value={{
      array : players ,
      setArray : setPlayers
     }}> 
      <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage name={name} setName={setName} />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/forth" element={<Forthpage />} />
      </Routes>
    </context.Provider>
  </div>
  );
};

export default Content1;
