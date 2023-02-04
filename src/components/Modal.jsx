import React from "react";

export default function Modal({ modal, setModal, children }) {
  if (!modal) return null;

  return (
    <>
      <div
        class="flex justify-center items-center fixed bg-jade opacity-90 right-0 left-0 top-0 bottom-0"
        onClick={() => setModal(false)}
      >
        <div class="bg-neutral-50 w-1/2 h-1/2 m-auto">
          <button onClick={() => setModal(false)}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
}
