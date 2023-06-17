import Calculator from "./Calculator";

function App() {
  /*
    <div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>  
 <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
  */
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <Calculator />
          <p className=" mt-2 text-center text-slate-500 text-xs">reizucodes</p>
        </div>
      </div>
    </>
  );
}
export default App;
//reizucodes2023
