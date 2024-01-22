import { Link } from "react-router-dom";
const FirstPage = (visibility, setVisibility) => {
  const handleVisibility = () => {
    setVisibility(true);
  };

  return (
    <div className="z-2 text-black flex flex-col justify-start items-center">
      <p className="text-[25px] font-bold mt-[5rem]">Wellcome to Snooker App</p>
      <p className="text-[16px] mt-[2rem]">This app calculates the score of snooker players</p>
      <Link to='/second'>
      <button className="px-[1rem] py-[0.5rem] border-[1px] border-black rounded-[10px] font-bold mt-[2rem]">
      Start Play</button></Link>
    </div>
  );
};

export default FirstPage;
