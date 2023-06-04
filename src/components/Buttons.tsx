interface ButtonProps {
  onClick: (data: string) => void;
}
export default function Buttons({ onClick }: ButtonProps) {
  //<button onClick={() => handleClick("-")}>-</button>

  const handleClick = (data: any) => {
    onClick(data);
  };
  return (
    <>
      <div className="flex flex-row">
        <button
          className="w-1/4 bg-red-500 text-xs font-bold text-gray-800 hover:bg-gray-700 hover:text-red-500"
          onClick={() => handleClick("AC")}
        >
          AC
        </button>
        <button className="w-1/4 text-xs" onClick={() => handleClick("Del")}>
          Del
        </button>
        <button className="w-1/4 text-xs" onClick={() => handleClick("%")}>
          %
        </button>

        <button
          className="w-1/4  bg-yellow-200 text-gray-600 hover:bg-gray-700 hover:text-yellow-300"
          onClick={() => handleClick("-")}
        >
          -
        </button>
      </div>
      <div className="flex flex-row">
        <button className="w-1/4" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="w-1/4" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="w-1/4" onClick={() => handleClick("9")}>
          9
        </button>
        <button
          className="w-1/4  bg-yellow-200 text-gray-600 hover:bg-gray-700 hover:text-yellow-300"
          onClick={() => handleClick("/")}
        >
          ÷
        </button>
      </div>

      <div className="flex flex-row">
        <button className="w-1/4" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="w-1/4" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="w-1/4" onClick={() => handleClick("6")}>
          6
        </button>
        <button
          className="w-1/4  bg-yellow-200 text-gray-600 hover:bg-gray-700 hover:text-yellow-300"
          onClick={() => handleClick("*")}
        >
          x
        </button>
      </div>

      <div className="flex flex-row">
        <button className="w-1/4" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="w-1/4" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="w-1/4" onClick={() => handleClick("3")}>
          3
        </button>
        <button
          className="w-1/4  bg-yellow-200 text-gray-600 hover:bg-gray-700 hover:text-yellow-300"
          onClick={() => handleClick("+")}
        >
          +
        </button>
      </div>

      <div className="flex flex-row">
        <button className="w-1/4" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="w-1/4" onClick={() => handleClick(".")}>
          .
        </button>
        <button
          className="w-1/2 bg-orange-300 text-gray-600 hover:bg-gray-700 hover:text-orange-300"
          onClick={() => handleClick("=")}
        >
          =
        </button>
      </div>
    </>
  );
}
