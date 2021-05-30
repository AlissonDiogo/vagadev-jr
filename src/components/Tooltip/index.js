import React from "react";

import "./tooltip.css";
function Tooltip(props) {
  const renderTitle = (title) => {
    return title.split("").splice(0, 16).join("") + "...";
  };
  return (
    <div className="tooltip">
      {renderTitle(props.children)}
      <span>{props.children}</span>
    </div>
  );
}

export default Tooltip;
