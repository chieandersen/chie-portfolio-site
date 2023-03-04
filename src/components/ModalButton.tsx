import { useState } from "react";
import Modal from "./Modal";

type ModalButtonProps = {
  container: string;
  modalImage: string;
  src: string;
  alt: string;
  className?: string;
};

// children is anything that is being passed in as a prop
const ModalButton = ({
  src,
  alt,
  className,
  container,
  modalImage,
}: ModalButtonProps) => {
  const [modal, setModal] = useState(false);
  // when imported on other pages ex: <ModalButton>children here</ModalButton>
  return (
    <div className="grid-flow-row">
      <button
        className=""
        onClick={() => {
          setModal(!modal);
          console.log(modal);
        }}
      >
        <div className={container}>
          <img src={src} alt={alt} className={className} />
        </div>
      </button>
      <Modal
        modalImage={modalImage}
        modal={modal}
        setModal={setModal}
        src={src}
        alt={alt}
      ></Modal>
    </div>
  );
};

export default ModalButton;
