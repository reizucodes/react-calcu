import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

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
    } else if (value === "Del") {
      // delete previous type number or operand
      if (data === "0") setData("0");
      else setData(data.slice(0, -1));
    } else if (value === "%") {
      //convert to percentage
      const percent = parseInt(data) / 100;
      setData(percent.toString());
    } else {
      //append number or operand
      if (data === "0" || data === "error") setData(value);
      else {
        setData(data + value);
      }
    }
  };
  return (
    <>
      <div className="">
        <Display prevData={prevData} display={data} />
        <Buttons onClick={handleButtonClick} />
      </div>
    </>
  );
}
