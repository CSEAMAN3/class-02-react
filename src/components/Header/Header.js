import React from "react";
import "./Header.css";

export default function Header({ openModal }) {
  return (
    <header>
      <div className="header-container">
        <h1>Lets Learn about Bob!</h1>
        <p className="lessons-button" onClick={openModal}>
          life lessons from bob
        </p>
      </div>
    </header>
  );
}
