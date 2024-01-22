import React, { useState } from 'react'
import { MdOutlineUndo } from 'react-icons/md'

const Card2 = ({title , id }) => {
    const [score1 , setScore1] = useState(0);
    const [prevScore , setPrevScore] = useState(0);
  return (
    <div className={`flex flex-col h-[60vh] mt-[1rem] w-[70%] border-[2px] border-black
    justify-around items-center`}>
    <MdOutlineUndo className='text-[30px] text-[#0c6b1a]' onClick={undo}/>
   <div className='flex justify-around items-center w-[100%] mt-[1rem]'>
   <p className='text-[30px] font-bold'>{title}</p>
   <p className='text-[30px] font-bold'>{score1}</p>
   </div>  
     <div className="w-full h-[100px] flex justify-between items-center">
         <div className="w-[50%] h-full flex flex-col justify-center items-center">
           <p className="text-[15px] font-bold">scores</p>
           <div className="flex flex-wrap justify-center items-center">
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-red-600 cursor-pointer" onClick={getScore20}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-red-700 cursor-pointer" onClick={getScore10}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-yellow-400 cursor-pointer" onClick={getScore2}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-green-800 cursor-pointer" onClick={getScore3}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-[#421c1c] cursor-pointer" onClick={getScore4}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-blue-800 cursor-pointer" onClick={getScore5}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-pink-500 cursor-pointer" onClick={getScore6}/>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full bg-black cursor-pointer" onClick={getScore7}/>
           </div>
         </div>
         <div className="w-[50%] h-full flex flex-col justify-start items-center">
           <p className="text-[15px] font-bold">fouls</p>
           <div className="flex flex-wrap justify-center items-center">
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore4}>4</div>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore5}>5</div>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore6}>6</div>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore7}>7</div>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore10}>10</div>
             <div className="w-[30px] h-[30px] m-[4px] rounded-full border-[1px] 
             border-black flex justify-center items-center font-bold text-[1rem] cursor-pointer" onClick={giveScore20}>20</div>
           </div>
         </div>
       </div>
     </div>
  )
  function getScore10 () {
    let number = score1;
    number = number + 10;
    setScore1(number);
    setPrevScore(number-10);
  }
  function getScore20 () {
    let number = score1;
    number = number + 20;
    setScore1(number);
    setPrevScore(number-20);
  }
  function getScore2 () {
    let number = score1;
    number = number + 2;
    setScore1(number);
    setPrevScore(number-2);
  }
  function getScore3 () {
    let number = score1;
    number = number + 3;
    setScore1(number);
    setPrevScore(number-3);
  }
  function getScore4 () {
    let number = score1;
    number = number + 4;
    setScore1(number);
    setPrevScore(number-4)
  }
  function getScore5 () {
    let number = score1;
    number = number + 5;
    setScore1(number);
    setPrevScore(number-5)
  }
  function getScore6 () {
    let number = score1;
    number = number + 6;
    setScore1(number);
    setPrevScore(number-6)
  }
  function getScore7 () {
    let number = score1;
    number = number + 7;
    setScore1(number);
    setPrevScore(number-7);
  }
  function giveScore4 () {
    let number = score1;
    number = number - 4;
    setScore1(number);
    setPrevScore(number+4);
  }
  function giveScore5 () {
    let number = score1;
    number = number - 5;
    setScore1(number);
    setPrevScore(number+5);
  }
  function giveScore6 () {
    let number = score1;
    number = number - 6;
    setScore1(number);
    setPrevScore(number+6);
  }
  function giveScore7 () {
    let number = score1;
    number = number - 7;
    setScore1(number);
    setPrevScore(number+7);
  }
  function giveScore10 () {
    let number = score1;
    number = number-10;
    setScore1(number);
    setPrevScore(number+10);
  }
  function giveScore20 () {
    let number = score1;
    number = number-20;
    setScore1(number);
    setPrevScore(number+20);
  }
  function undo () {
    setScore1(prevScore);
  }
}

export default Card2
