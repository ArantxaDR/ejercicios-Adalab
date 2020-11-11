import Arantxa from "./Arantxa.jpg";
import React from "react";
import "./App.css";
const myName = "Arantxa Delgado";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img = <img src={Arantxa} className="App-logo" alt="logo" />;

    const htmlCode = (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <div className="title-container">
              {img}
              <p className="title">{myName}</p>
              <p>Sábado 2 de Noviembre de 2020</p>
            </div>
          </header>
          <main>
            <p className="main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo
              ducimus facilis libero, natus maxime dolorem voluptatem officiis.
              Fugit laudantium sed architecto commodi eum quae maiores corrupti
              recusandae consequuntur necessitatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque dignissimos saepe molestiae
              quidem provident voluptates sunt ea natus alias rem? Perspiciatis,
              dolorem! At in omnis animi similique fugit eius doloribus.
            </p>
          </main>
          <footer className="footer">
            <p className="footer-text">Leer más...</p>
            <div className="likes-container">
              <p>37</p>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </div>
      </div>
    );
    return htmlCode;
  }
}

export default App;
