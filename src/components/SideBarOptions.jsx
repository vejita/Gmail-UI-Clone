import React from "react";
import "./css/SideBarOptions.css";

function SideBarOptions(prams) {
  const { Icon, title, number, selected } = prams;
  return (
    <div className={`SideBarOptions ${selected && "SideBarOptions--active"} `}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SideBarOptions;
