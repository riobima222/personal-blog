import Link from "next/link";

const Footer = ({ from }: { from: string }) => {
  return (
    <div
      className={`--FOOTER-- overflow-hidden rounded-t-lg flex flex-col justify-between items-center ${
        from === "blog" ? "mt-16" : ""
      }`}
    >
      <div className="--GRADIENT-- h-[.4em] w-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="--CONTENT-- min-h-32 flex flex-wrap w-full justify-between sm:pt-4 bg-slate-900">
        <div className="--LEFT CONTENT-- sm:w-[45%] items-center sm:items-start w-full ps-4 flex flex-col justify-center gap-2 sm:gap-5">
          <div className="flex gap-3 text-sm">
            <Link
              href="https://github.com/riobima222"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </Link>
            <Link href="#" className="hover:underline">
              Linked in
            </Link>
            <Link
              href="https://www.instagram.com/riobima222"
              className="hover:underline"
              target="blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </div>
          <p className="text-slate-400 italic tracking-widest">
            Built with Next js,
          </p>
          <p className="sm:hidden text-xs text-slate-400">
            &copy; All rights reserved
          </p>
        </div>
        <div className="--RIGHT CONTENT-- sm:flex w-[45%] ps-4 hidden flex-col justify-center gap-5">
          <div>
            <Link href="#" className="text-sm hover:underline">
              Portfolio
            </Link>
          </div>
          <p className="text-sm text-slate-400">&copy; All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
