import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-orange-300 mb-2 font-semibold">calculator</h1>
      <Calculator />
      <p className=" text-gray-500/95 relative">reizucodes 2023</p>
    </>
  );
}
export default App;
//reizucodes2023
