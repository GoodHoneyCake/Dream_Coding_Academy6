import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return <h1>Hi</h1>;
}

export default App;
