import { useState } from "react";
import "../App.css";
export default function Component() {
  const handleClickSub = () => {
    if (count == 0) {
      setIncrementCount(count);
    } else {
      return setIncrementCount(count - 1);
    }
  };
  const handleClickAdd = () => {
    return setIncrementCount(count + 1);
  };
  const handleClear = () => {
    return setIncrementCount(0);
  };
  const handleNumber = (num: number) => {
    return setIncrementCount(num);
  };
  const [count, setIncrementCount] = useState(0);
  return (
    <>
      <h1 className="logo">{count}</h1>
      <button onClick={handleClickSub}>-</button>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={handleClear}>Clear</button>
      <br></br>
      <button onClick={() => handleNumber(1)}>1</button>
      <button onClick={() => handleNumber(2)}>2</button>
    </>
  );
}
