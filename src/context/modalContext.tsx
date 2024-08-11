"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext({});

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalTransition, setModalTransition] = useState(false);
  const [modalHidden, setModalHidden] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        modalTransition,
        setModalTransition,
        modalHidden,
        setModalHidden,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
