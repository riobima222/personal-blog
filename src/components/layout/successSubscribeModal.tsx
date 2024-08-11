import { ModalContext } from "@/context/modalContext";
import Modal from "../modal";

// ICONS
import { IconRosetteDiscountCheck } from "@tabler/icons-react";
import { MouseEventHandler, useContext } from "react";
// ANIMATION
import Confetti from "react-confetti";

const SuccessSubscribeModal = () => {
  const { setModalTransition, setModalHidden }: any = useContext(ModalContext);

  const close:MouseEventHandler<HTMLButtonElement> = () => {
    setModalTransition(false);
    setTimeout(() => {
      setModalHidden(false);
    }, 600);
  };

  return (
    <Modal>
      <div className="fixed max-w-[30em] w-full min-h-[10em] bg-white flex flex-col gap-3 justify-center items-center py-4">
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
    </Modal>
  );
};
export default SuccessSubscribeModal;
