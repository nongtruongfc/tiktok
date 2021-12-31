import { useState } from "react"
const gifts = [
  'CPU i9',
  'Ram 32GB',
  'VGA 1660 4Gb',
  'Mouse Pro'
]

function App() {
 
  const renderGift = () => {
    const render =  gifts.map(gift => {
        return (
          <input type="radio" name="gift" key={gift}>{gift}</input>
        )
    })

    console.log(render)
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
