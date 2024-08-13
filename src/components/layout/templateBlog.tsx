"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import Subscribe from "../subscribe";
import { useRef } from "react";

const TemplateBlog = ({ children }: { children?: React.ReactNode }) => {
  const subscribeRef = useRef<HTMLDivElement>(null);
  const inputSubscribe = useRef<HTMLDivElement>(null);

  const ScrollToSubscribe = () => {
    if (subscribeRef.current && inputSubscribe.current) {
      subscribeRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        if (inputSubscribe.current) {
          inputSubscribe.current.focus();
        }
      }, 1300);
    }
  };
  return (
    <div className="max-w-[45em] mx-auto min-h-screen">
      <Navbar onClick={ScrollToSubscribe} arrow="/blog" />
      <div className="mt-14">{children}</div>
      <Subscribe ref={subscribeRef} inputRef={inputSubscribe} />
      <Footer from="templateBlog" />
    </div>
  );
};
export default TemplateBlog;
