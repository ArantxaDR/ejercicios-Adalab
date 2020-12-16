import React, { useState } from "react";

const CollapsPalette = (props) => {
  const [palette, setPalette] = useState("palette");

  return (
    <>
      <div className={palette}>
        {props.children} {setPalette("")};
      </div>
    </>
  );
};

export default CollapsPalette;
