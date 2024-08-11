import { PopupContext } from "@/context/popupContext";
import { IconRosetteDiscountCheck } from "@tabler/icons-react";
import { MouseEventHandler, useContext, useRef } from "react";
import Confetti from "react-confetti";

const PopupSuccess = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    popupTransition,
    setPopupTransition,
    popupHidden,
    setPopupHidden,
  }: any = useContext(PopupContext);

  const handleClickOut: MouseEventHandler<HTMLDivElement> = (e: any) => {
    if (e.target === modalRef.current) {
      setPopupTransition(false);
      setTimeout(() => {
        setPopupHidden(false);
      }, 600);
    }
  };

  const close: MouseEventHandler<HTMLButtonElement> = () => {
    setPopupTransition(false);
    setTimeout(() => {
      setPopupHidden(false);
    }, 600);
  };

  return (
    <div
      ref={modalRef}
      onClick={handleClickOut}
      className={`${popupTransition ? "opacity-100" : "opacity-0"} ${
        popupHidden ? "flex" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-60 z-[50] transition ease-in-out duration-500 px-4`}
    >
      <div className="fixed max-w-[30em] w-full min-h-[10em] bg-white flex flex-col gap-3 justify-center items-center py-4 px-4">
        <Confetti numberOfPieces={300} className={`w-full h-[11em]`} />
        <div className="flex flex-col space-y-2 items-center">
          <IconRosetteDiscountCheck
            stroke={2}
            className="text-green-400 text-2xl w-[4em] h-[4em]"
          />
          <h1 className="text-2xl text-black">Success !!</h1>
          <p className="text-black text-sm">
            thanks a lot for subscribing to this blog
          </p>
        </div>
        <button
          type="button"
          className="bg-violet-800 px-4 py-1 rounded-lg hover:scale-90 transition ease-in-out duration-300"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default PopupSuccess;
