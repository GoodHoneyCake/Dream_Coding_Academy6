import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${}&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setSearch(result.item))
    .catch((error) => console.log("error", error));
}

export default Search;
