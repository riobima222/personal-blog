// ICONS
import { IconClipboard } from "@tabler/icons-react";
import { IconCheck } from "@tabler/icons-react";

import { useState } from "react";

const CopyCode = ({ text }: { text: string }) => {
  const [isCopy, setIsCopy] = useState(false);
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1200);
  };
  return (
    <button
      type="button"
      onClick={handleCopyText}
      className="bg-slate-700 text-slate-200 flex flex-col gap-1 items-center justify-center absolute top-2 right-2 px-3 py-1 rounded-md text-xs hover:cursor-pointer"
    >
      {isCopy ? (
        <IconCheck stroke={2} className="text-green-500 w-[20px] h-[20px]" />
      ) : (
        <IconClipboard
          stroke={2}
          className="text-slate-200 w-[20px] h-[20px]"
        />
      )}
      copy
    </button>
  );
};

export default CopyCode;
