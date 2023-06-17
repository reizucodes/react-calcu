import { useState } from "react";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import FunctionButtons from "./components/FunctionButtons";

export default function Calculator() {
  //named variables should be defined first before functions since it throws an error
  const [data, setData] = useState("0");
  const [prevData, setPrevData] = useState("0");
  //function that handles button logic
  const handleButtonClick = (value: string) => {
    //clear screen
    if (value === "AC") {
      setData("0");
    } else if (value === "=") {
      //compute equation
      try {
        const result = eval(data);
        setData(result.toString());
        setPrevData(result.toString());
      } catch (error) {
        setData("error");
        setPrevData("error");
      }
    } else if (value === "DEL") {
      // delete previous type number or operand
      if (data === "0" || data.length == 1) setData("0");
      else setData(data.slice(0, -1));
    } else if (value === "%") {
      //convert to percentage
      const percent = parseInt(data) / 100;
      setData(percent.toString());
    } else {
      //append number or operand
      if (data === "0" || data === "error") setData(value);
      else {
        if(value === "÷" ) setData(data + "/");
        else if(value === "x" ) setData(data + "*");
        else setData(data + value);
      }
    }
  };
  return (
    <>
      <div className="bg-black rounded-xl w-96 h-auto border border-white px-2 py-6">
        <div className="w-full">
          <Display prevData={prevData} display={data} />
          <div className="grid grid-cols-4 gap-2 mx-2 mt-2 mb-4">
            <FunctionButtons data="AC" onClick={handleButtonClick}/>
            <FunctionButtons data="DEL" onClick={handleButtonClick}/>
            <FunctionButtons data="%" onClick={handleButtonClick}/>
            <FunctionButtons data="÷" onClick={handleButtonClick}/>
            <NumberButtons data="7" onClick={handleButtonClick} />
            <NumberButtons data="8" onClick={handleButtonClick} />
            <NumberButtons data="9" onClick={handleButtonClick} />
            <FunctionButtons data="-" onClick={handleButtonClick}/>
            <NumberButtons data="4" onClick={handleButtonClick} />
            <NumberButtons data="5" onClick={handleButtonClick} />
            <NumberButtons data="6" onClick={handleButtonClick} />
            <FunctionButtons data="x" onClick={handleButtonClick}/>
            <NumberButtons data="1" onClick={handleButtonClick} />
            <NumberButtons data="2" onClick={handleButtonClick} />
            <NumberButtons data="3" onClick={handleButtonClick} />
            <FunctionButtons data="+" onClick={handleButtonClick}/>
            <NumberButtons data="0" onClick={handleButtonClick} />
            <NumberButtons data="." onClick={handleButtonClick} />
            <NumberButtons data="." onClick={handleButtonClick} />
            <FunctionButtons data="=" onClick={handleButtonClick}/>
          </div>
        </div>
      </div>
    </>
  );
}
