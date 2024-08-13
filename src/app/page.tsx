import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";

// ICONS
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-2 min-h-[60em]">
      {/* HERO SECTION */}
      <div className="--HERO-- border-b-2 border-white min-h-[10em] flex justify-center items-center py-4 mb-2">
        <div className="--CONTENT-- flex flex-col sm:flex-row max-w-[40em] w-full justify-between items-center">
          <div className="--TITLE-- flex w-full sm:w-[60%] flex-col justify-center items-center mb-6 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              PATRIO BIMASUCI
            </h1>
            <h4 className="tracking-widest italic text-center sm:text-left sm:translate-x-[-2.5em]">
              Software engineer
            </h4>
            <div className="text-2xl text-slate-400 hidden gap-5 mt-3 translate-y-[.5em] sm:flex">
              <FaInstagram className="hover:cursor-pointer hover:text-slate-200" />
              <MdOutlineEmail className="hover:cursor-pointer hover:text-slate-200" />
              <FaGithub className="hover:cursor-pointer hover:text-slate-200" />
              <FaLinkedin className="hover:cursor-pointer hover:text-slate-200" />
            </div>
          </div>
          <div className="--image-- w-full sm:w-[40%] flex flex-col justify-center sm:justify-start items-center">
            <div className="relative border-4 border-black rounded-full flex w-[9em] h-[9em] flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
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
            <div className="text-2xl text-slate-400 flex gap-5 mt-3 sm:hidden translate-y-[.2em]">
              <Link href="https://www.instagram.com/riobima222">
                <FaInstagram className="hover:cursor-pointer" />
              </Link>
              <Link href="mailto:patriobimasuci354@gmail.com">
                <MdOutlineEmail className="hover:cursor-pointer" />
              </Link>
              <Link href="https://github.com/riobima222">
                <FaGithub className="hover:cursor-pointer" />
              </Link>
              <FaLinkedin className="hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/* HI THERE SECTION */}
      <div className="--HI THERE-- flex justify-center">
        <div className="sm:w-[80%] text-justify">
          Hi there 👋 thanks for coming, I write both short and long tutorials
          about web development mostly about javascript framework and stuff.
          {"   "}
          {"  "}
          <Link href="#" className="text-primary underline hover:no-underline">
            {"check my Portfolio"}
          </Link>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="mt-28">
        <h1 className="text-3xl mb-1">Projects</h1>
        <p className="text-sm mb-6">
          I've been working on some projects to learn new things about
          JavaScript and other topics. You can check them out below
        </p>
        <div className={`--PROJECTS CONTENT-- justify-around sm:flex `}>
          <Link
            href="https://sigma-todolist.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:w-[43%] w-full sm:mb-0 mb-4"
          >
            <div className="rounded-xl relative h-[13em] border-2 flex justify-center items-end overflow-hidden group hover:cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-75"></div>
              <Image
                src="/images/project/project1.jpg"
                alt="project1"
                width={500}
                height={500}
                className="rounded-md w-[87%] relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold mt-2 sm:text-start text-center mb-2">
              Todo list project
            </h4>
            <p className="text-sm text-justify">
              simple todo list project with next js and firebase
            </p>
          </Link>
          <Link
            href="https://sigma-store.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:w-[43%] w-full"
          >
            <div className="rounded-xl relative h-[13em] border-2 flex justify-center items-end overflow-hidden group hover:cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 opacity-90 transition-opacity duration-300 ease-in-out group-hover:opacity-75"></div>
              <Image
                src="/images/project/project2.jpg"
                alt="project2"
                width={500}
                height={500}
                className="rounded-md w-[87%] relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold mt-2 sm:text-start text-center mb-2">
              Simple online store project
            </h4>
            <p className="text-sm text-justify">
              Online store with some features like cart and checkout, i build
              with next js and firebase
            </p>
          </Link>
        </div>
      </div>

      {/* WRITER SECTION */}
      <div className="--WRITTER SECTION-- mt-24">
        <div className="--TITLE-- flex justify-between">
          <h1 className="text-3xl mb-2">Writing</h1>
          <Link href={"/blog"} className="hover:underline">
            See all posts
          </Link>
        </div>
        <div className="--CONTENT-- pt-10 min-h-[15em] pb-6">
          {/* WRITE 1 */}
          <Link
            href="/blog/useRef-in-the-different-components"
            className="flex flex-col gap-2 group relative mb-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300">
                {" "}
                -{" "}
              </span>
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300 opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300 group-hover:text-white">
                  How to use useRef in the different components in the next js
                </span>
              </span>
            </div>
            <span className="ps-4 text-xs">
              <span className="text-slate-400">Category:</span> Next js
            </span>
            <p className="text-sm ps-4">
              Using "useRef" in various components often happents when working
              with next JS, which is it's components-based
            </p>
          </Link>

          {/* WRITE 2 */}
          <Link
            href="/blog/why-should-switch-to-nextjs-app-router"
            className="flex flex-col gap-2 group relative mb-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300">
                {" "}
                -{" "}
              </span>
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300 opacity-0 group-hover:opacity-100"></span>
                <span className="relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-300 group-hover:text-white">
                  Why should you switch to next js app router, Here are the
                  benefits !
                </span>
              </span>
            </div>
            <span className="ps-4 text-xs">
              <span className="text-slate-400">Category:</span> Next js
            </span>
            <p className="text-sm ps-4">
              Hey fellow developers! , have you heard about App router in
              Next.js?, if not let's dive into why you should start checking out
              the cool feature
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
