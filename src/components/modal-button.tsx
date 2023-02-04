import React, { useState } from "react";
import Modal from "./Modal";

// children is anything that is being passed in as a prop
export default function ModalButton({ children }) {
  const [modal, setModal] = useState(false);
  // when imported on other pages ex: <ModalButton>children here</ModalButton>
  return (
    <div>
      <button
        onClick={() => {
          setModal(!modal);
          console.log(modal);
        }}
      >
        Open Modal
      </button>
      <Modal modal={modal} setModal={setModal} children={children} />
    </div>
  );
}
