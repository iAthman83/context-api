import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [init, setInit] = useState(0);
  return (
    <div className="container text-center my-5">
      <div>
        <h1>Simple counter</h1>
        <div>
          <input
            type="number"
            value={init}
            onChange={(e) => setInit(parseInt(e.target.value))}
          />
          <button>initialize</button>
        </div>
        <button style={{ margin: "0px 10px" }}>5 Less</button>
        {counter}
        <button style={{ margin: "0px 10px" }}>5 More</button>
      </div>
    </div>
  );
}

export default App;
