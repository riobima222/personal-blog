"use client";

import { BlogServices } from "@/services/blog";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

// ICONS
import { BlogItem } from "./interface";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ModalContext } from "@/context/modalContext";
import SubscribeModal from "@/components/layout/subscribeModal";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SubscribeServices } from "@/services/subscribe";
import PopupSuccess from "@/components/layout/popupSuccess";
import { PopupContext } from "@/context/popupContext";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const { setModalTransition, setModalHidden }: any = useContext(ModalContext);
  const { setPopupHidden, setPopupTransition }: any = useContext(PopupContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const retriveBlog = async () => {
      const response = await BlogServices.getBlog();
      if (response.data.status == 200) {
        setBlog(response.data.payload);
      } else {
        console.log(response);
      }
    };
    retriveBlog();
  }, []);

  const handleClickSubscribe = () => {
    setModalHidden(true);
    setTimeout(() => {
      setModalTransition(true);
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const response = await SubscribeServices.subscribe(form.email.value);
    if (response.data.status === 200) {
      setIsLoading(false);
      form.reset();
      setTimeout(() => {
        setModalTransition(false);
        setTimeout(() => {
          setModalHidden(false);
          setTimeout(() => {
            setPopupHidden(true);
            setTimeout(() => {
              setPopupTransition(true);
            }, 200);
          }, 300);
        }, 600);
      }, 500);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="--MAIN CONTAINER-- max-w-[45em] mx-auto min-h-screen">
      {/* NAVBAR SECTION */}
      <Navbar arrow="/" onClick={handleClickSubscribe} />

      {/* HERO SECTION */}
      <div className="--HERO-- mt-14">
        <h1 className="text-2xl font-bold">Index blog</h1>
        <p className="sm:max-w-[30em]">
          Hi 🙋‍♂️ thanks for coming, this blog covers web programing mostly
          javascript, and other stuff too
        </p>
      </div>

      {/* BLOG CONTENT SECTION */}
      <div
        className={`--BLOG CONTENT-- mt-12 flex flex-wrap flex-col sm:flex-row ${
          blog.length > 0 ? "justify-between" : "h-[10em] justify-center"
        }`}
      >
        {blog.length > 0 ? (
          blog.map((item: BlogItem, i: number) => (
            <Link
              key={i}
              href={`/blog/${item.url}`}
              className="--CARD-- block w-full sm:w-[45%] mb-6"
            >
              <Image
                src={item.image}
                alt="blog-1"
                height={300}
                width={300}
                className="bg-gray-500 w-full h-[12em] rounded-2xl"
              />
              <div className="--DESC-- p-3 bg-slate-600">
                <p className="text-xs mb-1 text-gray-400">{item.date}</p>
                <p className="text-sm">{item.title}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="--LOADING-- flex flex-col justify-center items-center gap-3">
            <span className="loading loading-spinner text-info"></span>
            <span className="text-sm">Loading...</span>
          </div>
        )}
      </div>

      {/* FOOTER SECTION */}
      <Footer from="blog" />
      <SubscribeModal>
        <div className="--SUBSCRIBE Modal-- max-w-[45em] w-full text-black bg-white min-h-[20em] sm:flex">
          <div className="--LEFT CONTENT-- bg-violet-800 text-white p-2 w-full sm:w-[50%]">
            <h1 className="text-2xl ps-2 font-bold sm:mb-3">
              Subscribe for latest updates
            </h1>
            <p className="text-sm sm:mb-3">
              We really appreciate it if you Subscribe, you'll recieve an Email
              with updates, and subscribing is completely free
            </p>
            <div className="--IMAGE--relative w-[6em] flex flex-col justify-start sm:justify-start items-center mt-2">
              <div className="relative left-0 border-4 border-black rounded-full flex w-[5.5em] h-[5.5em] flex-col items-center justify-start overflow-hidden bg-background md:shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="w-[12em] h-[12em]"
                />
                <BorderBeam
                  size={100}
                  duration={1}
                  anchor={80}
                  delay={5}
                  borderWidth={3}
                />
                <BorderBeam
                  size={100}
                  duration={5}
                  anchor={50}
                  delay={3}
                  borderWidth={3}
                />
                <BorderBeam
                  size={100}
                  duration={5}
                  anchor={30}
                  delay={5}
                  borderWidth={3}
                />
              </div>
            </div>
          </div>
          <div className="--RIGHT CONTENT-- min-h-[10em] w-full sm:w-[50%] bg-slate-800 flex justify-center items-center px-2">
            <div className="max-w-[20em] w-full">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="max-w-[20em] pb-2"
              >
                <label htmlFor="email" className="text-white">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  className="focus:outline-none block py-2 px-4 bg-white text-black rounded-md text-sm w-full mb-2 border-4 border-violet-800"
                  placeholder="enter your email here !"
                  id="email"
                />
                <div className="flex justify-center items-center">
                  {isLoading ? (
                    <div className="--LOADING-- flex flex-col justify-center items-center gap-3">
                      <span className="loading loading-spinner loading-sm text-primary"></span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-violet-800 px-4 py-2 text-white mx-auto rounded-md text-sm font-bold tracking-wider hover:text-slate-200"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </SubscribeModal>

      {/* POPUP SUCCESS  */}
      <PopupSuccess />
    </div>
  );
};
export default BlogPage;
