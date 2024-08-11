import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// CONTEXT
import ModalProvider from "@/context/modalContext";
import PopupProvider from "@/context/popupContext";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "home page of this blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.className} bg-slate-800 text-slate-200 px-4`}
      >
        <ModalProvider>
          <PopupProvider>
          {children}
          </PopupProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
