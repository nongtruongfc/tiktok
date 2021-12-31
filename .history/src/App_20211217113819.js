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
          <div className="gift">
            <input type="radio" name='gift' key={gift} />
            <label for='gift'>{gift}</label>
          </div>
          
        )
    })

    console.log(render)
    return render
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
