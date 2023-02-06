const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default function Modal({ modal, setModal, src, alt }) {
  if (!modal) return null;

  return (
    <>
      <div
        className="flex justify-center items-center fixed  right-0 left-0 top-0 bottom-0"
        onClick={() => setModal(false)}
      >
        <div className="bg-neutral-700 opacity-80 absolute right-0 left-0 top-0 bottom-0 -z-10" />
        <div className="flex flex-col max-w-[800px] items-center m-auto">
          {/* <button onClick={() => setModal(false)}>Close</button> */}
          <div className="h-16" />
          <Image src={src} alt={alt} />
          <p className="mt-4 text-jade-50">{alt}</p>
        </div>
      </div>
    </>
  );
}
