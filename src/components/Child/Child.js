import React from "react";
import "./Child.css";

import Boy from "../../images/boy.jpg";

export default function Child({ name, pats, handleBobsPats }) {
  return (
    <div>
      <h2>{name}</h2>
      {/* <img src={require("../../images/boy.jpg")} alt="boy" /> */}
      <img src={Boy} alt="boy" onClick={handleBobsPats} />
      <span>Number of Pats on Bobs head: {pats}</span>
    </div>
  );
}
