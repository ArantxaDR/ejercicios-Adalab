import React from "react";
import "../stylesheets/App.css";
import Collaps from "./Collaps";
import Show from "./Show";
import ships from "../data/spaceShips.json";
import CollapsPalette from "./CollapsPalette.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipNames: ships.palettes,
    };
  }

  render() {
    const listShipNames = this.state.shipNames.map((item, index) => (
      <li key={index}>
        <Collaps name={item.name}>
          <Show showName={item.from} />
          <CollapsPalette />
        </Collaps>
      </li>
    ));
    return (
      <div>
        <ul>{listShipNames}</ul>
      </div>
    );
  }
}

export default App;
