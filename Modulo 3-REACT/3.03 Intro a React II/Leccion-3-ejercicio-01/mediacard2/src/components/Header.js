import React from "react";
import Arantxa from "../styles/Arantxa.jpg";
const myName = "Arantxa Delgado";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={Arantxa} className="App-logo" alt="logo" />
        <div className="title-container">
          <p className="title">{myName}</p>
          <p>Sábado 2 de Noviembre de 2020</p>
        </div>
      </header>
    );
  }
}
export default Header;
