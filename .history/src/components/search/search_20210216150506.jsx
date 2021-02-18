import React, { useEffect, useState } from "react";
import SearchInput from "./search-input";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSearch(result.item))
      .catch((error) => console.log("error", error));
  }, []);
  return <SearchInput />;
}

export default Search;
