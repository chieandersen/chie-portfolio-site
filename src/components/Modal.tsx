import type { ImageMetadata } from "astro";
import { Image } from "astro:assets";

type ModalProps = {
  modal: boolean;
  modalImage?: string;
  setModal: (modal: boolean) => void;
  src: ImageMetadata;
  alt: string;
};

const Modal = ({ modal, modalImage, setModal, src, alt }: ModalProps) => {
  if (!modal) return null;

  return (
    <>
      <div
        className="flex justify-center items-center fixed right-0 left-0 top-0 bottom-0"
        onClick={() => setModal(false)}
      >
        <div className="bg-neutral-50 opacity-90 absolute right-0 left-0 top-0 bottom-0 -z-10" />
        <div className="flex flex-col max-w-[800px] items-center justify-center m-auto">
          {/* <button onClick={() => setModal(false)}>Close</button> */}
          <div className="h-16" />
          <div className={modalImage}>
            <Image src={src} alt={alt} />
          </div>
          <div className="mt-4 mx-auto text-jade-800 w-fit text-center font-semibold">
            {alt}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
