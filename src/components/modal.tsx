import { ModalContext } from "@/context/modalContext";
import { MouseEventHandler, useContext, useRef } from "react";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    modalTransition,
    setModalTransition,
    modalHidden,
    setModalHidden,
  }: any = useContext(ModalContext);

  const handleClickOut: MouseEventHandler<HTMLDivElement> = (e: any) => {
    if (e.target === modalRef.current) {
      setModalTransition(false);
      setTimeout(() => {
        setModalHidden(false);
      }, 600);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClickOut}
      className={`${modalTransition ? "opacity-100" : "opacity-0"} ${
        modalHidden ? "flex" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-60 z-[50] transition ease-in-out duration-500 px-4`}
    >
      {children}
    </div>
  );
};
export default Modal;
