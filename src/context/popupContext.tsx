"use client";

import { createContext, useState } from "react";

export const PopupContext = createContext({});

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [popupTransition, setPopupTransition] = useState(false);
  const [popupHidden, setPopupHidden] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        popupTransition,
        setPopupTransition,
        popupHidden,
        setPopupHidden,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
export default PopupProvider;
