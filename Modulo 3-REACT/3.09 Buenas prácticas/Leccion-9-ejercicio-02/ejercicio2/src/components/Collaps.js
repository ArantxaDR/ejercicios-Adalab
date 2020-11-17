import React from "react";
import PropTypes from "prop-types";

class Collaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isUp: false,
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse() {
    this.setState({
      isOpen: !this.state.isOpen,
      isUp: !this.state.isUp,
    });
  }
  render() {
    const openCollaps = this.state.isOpen ? "" : "collapsed";
    const upArrow = this.state.isUp ? "turn" : "";
    return (
      <>
        <div onClick={this.handleCollapse} className="App">
          <h2>{this.props.name}</h2>
          <i className={upArrow + " fas fa-angle-down"}></i>
        </div>
        <div className={openCollaps}>{this.props.children}</div>
      </>
    );
  }
}
Collaps.propTypes = {};
export default Collaps;
