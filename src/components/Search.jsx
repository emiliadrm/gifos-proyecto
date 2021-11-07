import React, { useState, useContext } from "react";
import banner from "../resource/ilustra_header.svg";
import lupa from "../resource/Iconlupa.svg";

function Search({ search, setSearch, onSearch, autoCompletacion, sugerencias}) {
  return (
    <>
      <section>
        <h1 className="tittleH1">¡Inspirate y busca los mejores GIFS!</h1>
        <img src={banner} alt="" />
        <Browser setSearch={setSearch} onSearch={onSearch} autoCompletacion={autoCompletacion} sugerencias={sugerencias} search={search} />
        <h2 className="tittleH2">Resultados de la búsqueda</h2>
      </section>
    </>
  );
}

function Browser({ setSearch, onSearch, autoCompletacion, sugerencias, search }) {
  return (
    <section className="flexAlign">
      <input
        className="textStyle"
        type="text"
        placeholder="Busca gifs"
        onChange={(e) => {
          setSearch(e.target.value, true);
        }}
        value={search}
      />
      <button type="button" className="buttonStyle" onClick={onSearch}>
        <img src={lupa} alt="" />
      </button>
      { autoCompletacion === true ? (
        <div className="aCompleteStyle">
          {sugerencias.map((sugerencia) => {
            return (
              <button className="sugStyle" type="button" onClick={() => {
                setSearch(sugerencia.name, false);
              }}
              >
                {sugerencia.name}
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

export default Search;
