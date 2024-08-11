import Link from "next/link";

// ICONS
import { MdOutlineEmail } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Navbar = ({
  arrow,
  onClick,
}: {
  arrow: string;
  onClick?: () => void;
}) => {
  return (
    <div className="--NAVBAR-- pt-3 flex justify-between items-center">
      <div className="--LEFT CONTENT--">
        <Link href="/">
          <h1 className="text-xl">Learn</h1>
          <h4 className="text-xs">
            with me <i>patrio bimasuci</i>
          </h4>
        </Link>
      </div>
      <div className="--RIGHT CONTENT-- flex gap-3 items-center">
        <Link href={arrow} className="text-lg group">
          <FaLongArrowAltLeft className="hover:text-slate-500" />
        </Link>
        <button
          type="button"
          className="flex items-center gap-2 hover:cursor-pointer hover:bg-violet-600 bg-violet-800 text-white text-sm px-2 py-1 rounded-md"
          onClick={onClick}
        >
          <MdOutlineEmail className="hover:cursor-pointer text-xl" />
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
