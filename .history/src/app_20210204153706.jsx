import React from "react";
import "./app.css";

function App() {
  const name = "kim";
  return (
    <>
      <h1>Hi</h1>
      <h1>Hello {name}</h1>
      {[1, 2].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
