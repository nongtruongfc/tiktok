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
  const renderGift = () => {
    gifts.map(gift => {
        return (
          <input type="radio" name="gift" value={gift}>{gift}</input>
        )
    })
  }
  return (
    <div className="App">
        <div className="gifts">
          { renderGift() }
        </div>
    </div>
  );
}

export default App;
