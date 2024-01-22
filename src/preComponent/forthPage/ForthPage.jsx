import React, { useState } from "react";
import { useContext } from "react";
import context from "../../context/app.context";
import Card2 from "../../component/card2/Card2";


const ForthPage = () => {
  const context1 = useContext(context);
  const [array, setArray] = useState(context1.array);
  
  return (
    <div>
      <ul className="flex flex-row justify-center flex-wrap items-center">
        {array.map((item, index) => (
          <Card2 key={index} title={item.Pname} id={item.Pid}/>
        ))}
      </ul>
    </div>
  );
}

export default ForthPage
