import { useState } from "react";
import Modal from "./Modal";
import type { ImageMetadata } from "astro";
import { Image } from "astro:assets";

type ModalButtonProps = {
  container?: string;
  modalImage?: string;
  src: ImageMetadata;
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
    <div className="grid-flow-row ">
      <button
        className=""
        onClick={() => {
          setModal(!modal);
        }}
      >
        <div className={container}>
          <Image src={src} alt={alt} class={className} />
        </div>
      </button>
      <Modal
        modalImage={modalImage}
        modal={modal}
        setModal={setModal}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ModalButton;
