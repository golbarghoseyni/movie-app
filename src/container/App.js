import React, { useState } from "react";
import Movies from "./movie";
import Header from "./../components/Header/Header";
import { movies } from "../service/movies.json";

function App() {
  const [movieList, setMovielist] = useState(movies);

  const handleSearch = (param) => {
    const allmovie = [...movieList];
    const newList = allmovie.filter((m) =>
      m.category.toUpperCase().includes(param.toUpperCase())
    );
    setMovielist(newList);
    if (param.length === 0) {
      setMovielist(movies);
    }
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Movies list={movieList} />
    </div>
  );
}

export default App;
