import { useState } from "react";
import Modal from "./Modal";

// children is anything that is being passed in as a prop
export default function ModalButton({ src, alt, className }) {
  const [modal, setModal] = useState(false);
  // when imported on other pages ex: <ModalButton>children here</ModalButton>
  return (
    <div>
      <button
        className=""
        onClick={() => {
          setModal(!modal);
          console.log(modal);
        }}
      >
        <img className={className} src={src} alt={alt} />
      </button>
      <Modal modal={modal} setModal={setModal} src={src} alt={alt}></Modal>
    </div>
  );
}
