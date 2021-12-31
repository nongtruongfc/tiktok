import { useState } from "react"
const gifts = [
  'CPU i9',
  'Ram 32GB',
  'VGA 1660 4Gb',
  'Mouse Pro'
]

function App() {
  const [gift,setGift] = useState("Chua co phan thuong")
  const handleGift = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)])
  }

  return (
    <div className="App">
        <h1>{gift}</h1>
        <button onClick={handleGift}>Lay thuong</button>
    </div>
  );
}

export default App;
