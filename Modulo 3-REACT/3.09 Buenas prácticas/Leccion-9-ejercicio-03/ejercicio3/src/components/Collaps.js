import React, { useState } from "react";
import PropTypes from "prop-types";

const Collaps = (props) => {
  const [name, setName] = useState("collapsed");
  const [arrow, setArrow] = useState("");

  const handleCollapse = () => {
    setName("");
    setArrow("turn");
  };

  return (
    <>
      <div onClick={handleCollapse} className="App">
        <h2>{props.name}</h2>
        <i className={arrow + " fas fa-angle-down"}></i>
      </div>
      <div className={name}>{props.children}</div>
    </>
  );
};
Collaps.propTypes = {};
export default Collaps;
