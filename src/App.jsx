import React, { useEffect, useState } from "react";
import "./css/style.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [search, setSearchState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [autoCompletacion, setAutoCompletacion] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);

  const setSearch = (busqueda, ejecutarAutocompletar = true) => {
    setSearchState(busqueda);
    setAutoCompletacion(ejecutarAutocompletar);
  }

  const hacerPeticion = () => {
    setIsLoading(true);
    setGifs([]);
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=r2tcfiNPG5C4PuMLZQrzLbZMIZ1ld49M&q=${search}&limit=15&offset=0&rating=g&lang=es`
    );
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setIsLoading(false);
        setGifs(data);
      });
  }

  useEffect(() => {
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=r2tcfiNPG5C4PuMLZQrzLbZMIZ1ld49M&limit=15&rating=g`
    );
    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setGifs(data);
      });
  }, []);

  useEffect(() => {
    if (autoCompletacion === false) return;

    let peticion = fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=r2tcfiNPG5C4PuMLZQrzLbZMIZ1ld49M&limit=5&q=${search}`);

    peticion
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setSugerencias(resp.data);
      });
  }, [search]);

  return (
    <div className={`App ${modoOscuro ? "dark" : "light"}`}>
      <div className="container">
        <Header modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
        <Search
          onSearch={hacerPeticion}
          search={search}
          setSearch={setSearch}
          autoCompletacion={autoCompletacion}
          sugerencias={sugerencias}
        />
        <Results gifs={gifs} setGifs={setGifs} isLoading={isLoading} modoOscuro={modoOscuro} />
      </div>
    </div>
  );
}
