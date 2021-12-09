import React from "react";
import logo from "../resource/Imglogo.svg";

function Header({ modoOscuro, setModoOscuro }) {
  return (
    <section>
      <div className="blueBar"></div>
      <nav className="navStyle">        
        <a href=""><Logo /></a>
        <BotonModo modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      </nav>
    </section>
  );
}

function Logo() {
  return (
    <div className="logoStyle">
      <img src={logo} alt="" />
      <h3 className="textPosition">GIFOS</h3>
    </div>
  );
}

function BotonModo({ modoOscuro, setModoOscuro }) {
  return (
    <>
      <button className="btn" onClick={() => setModoOscuro(!modoOscuro)}>
        MODO {modoOscuro ? "DARK 🌚" : "LIGHT 🌝"}
      </button>
    </>
  );
}

export default Header;