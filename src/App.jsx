import './App.css'
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Coin Flipper 🪙</h1>
      <Flip />
      <p>New changes</p>
    </div>
  );
}

export default App;


function Flip() {
  // Declare 3 state variables and state setter functions:

  // 1. The first keeps track of the coin landing on heads.
  //  - It should be initially set to 0.
  //  - Add your code here!

  // 2. The next should do the same but with tails.
  //  - It should also initially be set to 0.
  //  - Add your code here!

  // 3. Lastly, set the initial state for the coin side.
  //  - Call the state variable coinSide
  //  - Add your code here!

  function flipCoin() {
    // Math.random generates a random number greater than 0 and less than 1.
    let flip = Math.random();
    if (flip < 0.5) {
      flip = "heads";
      // 4. Increase the heads count every time the coin lands on heads
      //  - Set coinSide to heads so the coin image changes accordingly
    } else {
      flip = "tails";
      // 5. Increase the tails count every time the coin lands on tails
      //  - Set coinSide to tails so the coin image changes accordingly.
    }
  }

  return (
    <div className="flip">
      <div className="coin">
        {/* Uncomment lines below when finished! */}
        {/* <img
          src={
            coinSide === "heads"
              ? "https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-general-george-washington-crossing-the-delaware-quarter-uncirculated-obverse-philadelphia-768x768.jpg"
              : "https://jeremythemagician.com/wp-content/uploads/2012/11/Quarter_new.jpg"
          }
          alt="coin"
        /> */}
      </div>
      {/* 6. Write an event handler to flip the coin!  */}
      <button>Click to flip!</button>
      
      {/* Counts how many times the coin has landed on heads. */}
      {/* 7. Change 0 to the heads count state variable  */}
      <p>Heads: {0}</p>
      
      {/* Counts how many times the coin has landed on tails */}
      {/* 8. Change 0 to the tails count state variable  */}
      <p>Tails: {0}</p>
    </div>
  );
}
