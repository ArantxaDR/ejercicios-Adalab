import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default App;
