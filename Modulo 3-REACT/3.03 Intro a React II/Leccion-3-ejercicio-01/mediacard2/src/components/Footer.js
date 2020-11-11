import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">Leer más...</p>
        <div className="likes-container">
          <p>37</p>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    );
  }
}

export default Footer;
