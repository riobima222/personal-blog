import { SubscribeServices } from "@/services/subscribe";
import React, { forwardRef, RefObject, useContext, useState } from "react";
import SuccessSubscribeModal from "./layout/successSubscribeModal";
import { ModalContext } from "@/context/modalContext";

interface SubscribeProps {
  // Tambahkan props lain jika ada
  inputRef: RefObject<HTMLDivElement>;
}

const Subscribe = forwardRef<HTMLDivElement, SubscribeProps>((props, ref) => {
  const { inputRef }: any = props;
  const [isLoading, setIsLoading] = useState(false);
  const { setModalTransition, setModalHidden }: any = useContext(ModalContext);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const response = await SubscribeServices.subscribe(form.email.value);
    if (response.data.status === 200) {
      setIsLoading(false);
      form.reset();
      setModalHidden(true);
      setTimeout(() => {
        setModalTransition(true);
      }, 200);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <div ref={ref} className="min-h-[10em] bg-violet-800 pt-8 px-3 mt-14">
      <h1 className="font-bold text-center text-xl mb-2">
        Subscribe for latest updates
      </h1>
      <p className="text-center text-xs max-w-[49em] mx-auto">
        Subscribing is free and easy, just enter your email, and we will send
        you the latest updates, and we will appreciate it
      </p>
      <form
        onSubmit={(e) => handleSubscribe(e)}
        className="mx-auto max-w-[20em] mt-3 pb-2"
      >
        <input
          type="email"
          className="focus:outline-none block py-2 px-4 bg-white text-black rounded-md text-sm w-full mb-2"
          placeholder="enter your email here !"
          name="email"
          ref={inputRef}
        />
        <div className="flex justify-center items-center">
          {isLoading ? (
            <div className="--LOADING-- flex flex-col justify-center items-center gap-3">
              <span className="loading loading-spinner loading-sm text-primary"></span>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-violet-800 border-2 px-4 py-1 text-white mx-auto rounded-md text-sm font-bold tracking-wider hover:bg-white hover:text-violet-800 transition ease-in-out duration-300"
            >
              submit
            </button>
          )}
        </div>
      </form>
      <SuccessSubscribeModal />
    </div>
  );
});

Subscribe.displayName = "Subscribe";

export default Subscribe;
