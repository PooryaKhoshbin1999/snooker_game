import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import context from '../../context/app.context';

const SecondPage = ({name , setName}) => {
  const context1 = useContext(context);
  const handleAdd = (event) => {
    event.preventDefault();
    if(context1.array.length < 6 && name.length > 0){
      context1.setArray([...context1.array,{Pname : name , Pid : `Player${context1.array.length+1}-${name}` , score : 0}]);
    } else {
      if(context1.array.length == 6){
        alert("You Can Enter Maximum 6 Players")
      }
      if(name.length == 0){
        alert("Name must contain at least a character")
      }
    }
    setName('');
  }
  return (
    <div className='w-full flex flex-col justify-start items-center mt-[5rem] overflow-y-hidden'>
      <input type="text" placeholder='Enter the Players Names'
      onChange={(e)=>setName(e.target.value)}
      value={name}
      className='px-[15px] py-[5px] w-[80%] rounded-[10px] bg-[#0000] border-[2px]
      border-black text-[20px] placeholder:text-black outline-none' />
      
      <button onClick={handleAdd} className='px-[4rem] py-[0.5rem] border-[2px] text-[20px] font-bold 
      border-black rounded-[10px] mt-[2rem]'>
      Enter</button>
      
      <div className='flex flex-col mt-[5rem] justify-between w-[80%] items-center'>
      <Link to='/third' ><button className='px-[1.5rem] py-[0.5rem] border-[2px] text-[20px] font-bold 
      border-black rounded-[10px]'>
      Usually Mode</button></Link>
      <Link to='/forth' ><button className='px-[2.1rem] py-[0.5rem] border-[2px] text-[20px] font-bold 
      border-black rounded-[10px] mt-[1rem]'>Score Mode</button></Link>
      </div>
     
      
    </div>
  )
}

export default SecondPage
