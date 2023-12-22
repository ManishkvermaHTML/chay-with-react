import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(7);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-=[]{}|;:,.<>?/`~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyToClipBoard = ()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  }
 
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllow, charAllow,passwordGenerator ])
   
  return (
    <>
      <div className="text-center  w-[70%] mxa-w-md mx-auto my-5 bg-slate-500 px-4 py-8 rounded-lg shadow-sm">
        <h1 className="text-white font-mono font-bold text-3xl mb-4 underline ">
          Password Generator
        </h1>
        <div className="flex justify-center shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            className="outline-none w-[70%] py-3 px-4 rounded-l-lg text-2xl font-semibold "
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="rounded-r-lg bg-blue-700 font-bold text-xl"
          onClick={copyToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="text-white flex flex-wrap text-xl font-semibold gap-x-1 justify-center ">
          <div className="flex flex-wrap items-center gap-x-1 mr-3 text-yellow-500">
            <input
              type="range"
              min={7}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
              id="rng"
            />
            <label htmlFor="rng"> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-0 mr-3 text-yellow-500">
            <input 
            type="checkbox"
            defaultChecked={numAllow}
            id="num" 
            className="p-0 m-0 "
            onChange={()=>{
              setNumAllow( (prev) => !prev)
            }} />
            <label htmlFor="num" className=" ml-2 mr-1">
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-0 mr-3 text-yellow-500">
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            id="chr" 
            className="p-0 m-0"
            onChange={()=>{
              setCharAllow((prev) => !prev); 
            }} />
            <label htmlFor="chr" className=" ml-2 mr-1">
              Charectors
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
