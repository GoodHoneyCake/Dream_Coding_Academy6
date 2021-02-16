import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <h1>Hi</h1>;
}

export default App;
