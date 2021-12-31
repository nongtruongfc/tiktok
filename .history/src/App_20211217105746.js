import { useState } from "react"
const gifts = [
  'CPU i9',
  'Ram 32GB',
  'VGA 1660 4Gb',
  'Mouse Pro'
]
[gift,setGift] = useState("Chua co phan thuong")
function App() {
  return (
    <div className="App">
        <h1>{gift}</h1>
        <button>Lay thuong</button>
    </div>
  );
}

export default App;
