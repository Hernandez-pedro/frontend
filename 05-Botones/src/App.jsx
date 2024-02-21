import { useState } from "react";

function App() {
const [cuenta , setCuenta] = useState (0)
const handleButtonIncrementar =()=>{
  setCuenta(cuenta +1 )
  
}
const reset =()=>{
  setCuenta(0 )}
//  const handleButtonDecrementar =()=>{
//    setCuenta(cuenta - 1 )
//  }


  return (
    <div>
      <h1>Contador</h1>
      <hr />
      <h2>{cuenta}</h2>
      <button onClick={handleButtonIncrementar}>Incrementar</button>
      <button onClick={()=> setCuenta(cuenta -1)}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;