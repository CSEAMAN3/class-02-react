// import "./Reset.css";
import "./App.css";

import { useState } from "react";

import Parent from "./components/Parent/Parent";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

// import data from "./data.json";

function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
    console.log(showModal);
  }

  function closeModal() {
    setShowModal(false);
  }

  function pointless(experience) {
    console.log(`This is not pointless, it's ${experience}!`);
  }

  return (
    <div className="App">
      {/* <ul>
        <li>{data[0].name}</li>
        <li>{data[1].name}</li>
        <li>{data[2].name}</li>
      </ul> */}
      {/* <h1>Props and State</h1> */}
      <Header openModal={openModal} />
      <Parent />
      {showModal && <Modal closeModal={closeModal} nick={"great"} pointless={pointless} />}
    </div>
  );
}

export default App;
