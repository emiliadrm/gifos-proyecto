import React, { useState, useContext } from "react";
import loadingGif from "../resource/loading.gif"
import imgNFDark from "../resource/fondoNFdark.svg"
import imgNFLight from "../resource/fondoNFlight.svg"

function Results({ gifs, isLoading, modoOscuro}) {
  return (
    <div className="conteinerResults">
      <GifResults gifs={gifs} isLoading={isLoading} modoOscuro={modoOscuro}/>
    </ div>
  );
}

function GifResults({ gifs, isLoading, modoOscuro}) {
  if (isLoading) {
    return (
      <img src={loadingGif} alt="loading" />
    )
  }
  return gifs?.data?.length > 0 ? (
    gifs?.data?.map((data) => {
      return <GifCard gif={data.images.original.url} urlGif={data.url}/>;
    })
  ) : (
    <div>
      {modoOscuro ? (
        <div className="relativeDiv">
        <img src={imgNFDark} alt="" width="800px" />
        <div className="textNF">
          <h3>Lo sentimos.</h3>
          <h3>Tu búsqueda no pudo ser encontrada.</h3>
          <h3>¿Quieres intentar con otra categoría?</h3>
        </div>
        </div>
      ) : (
        <div className="relativeDiv">
          <img src={imgNFLight} alt="" width="800px" />
          <div className="textNF">
            <h3>Lo sentimos.</h3>
            <h3>Tu búsqueda no pudo ser encontrada.</h3>
            <h3>¿Quieres intentar con otra categoría?</h3>
          </div>
        </div>
      )}
    </div>
  );
}

function GifCard({ gif, urlGif }) {
  return (
    <>
    <a href={urlGif} target="_blank"><img src={gif} alt="" className="imgStyle"/></a>
    </>
  );
}


export default Results;
