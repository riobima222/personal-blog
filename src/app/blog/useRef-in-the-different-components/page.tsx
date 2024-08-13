"use client";

import CopyCode from "@/components/copyCode";
import TemplateBlog from "@/components/layout/templateBlog";

// CODE SNIPPET
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// CODE
import { codeSnippet, codeSnippet2 } from "./codeSnippet";

const UseRefInTheDifferentComponents = () => {
  return (
    <TemplateBlog>
      <h1 className="text-2xl mb-3 font-bold">
        UseRef in the different components
      </h1>
      <p>
        Sometimes when we use nextJS, it's common to use "useRef" to reference
        HTML element, but since nextJS is component-based, we might want to use
        it across different components.
        <br />
        <br />
        Okey, for this case, i want to create a scroll function, if your case is
        different that's okay, basically the implementation is same
        <br />
        <br />
        see code bellow
      </p>
      <p className="mt-3 text-sm text-slate-400">Code :</p>
      <div className="relative">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
        <CopyCode text={codeSnippet} />
      </div>
      <h1 className="mt-4 mb-2">Explain :</h1>
      <div className="ps-4 flex flex-col gap-2">
        <div className="flex item-center gap-2">
          <span> - </span>
          <p>
            in the parent component we define a ref, in the code above we define
            <strong>
              <i>"subscribeRef" </i>
            </strong>
            &
            <strong>
              <i>"inputSubscribe" </i>
            </strong>
            {". "} you can customize the name whatever you want
          </p>
        </div>

        <div className="flex item-center gap-2">
          <span> - </span>
          <p>
            then pass the ref to the child component, in the code above, we
            passed the ref to the Subscribe component
          </p>
        </div>
      </div>
      <p className="mt-5">then see code bellow</p>
      <p className="mt-2 text-sm text-slate-400">Code :</p>
      <div className="relative">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          {codeSnippet2}
        </SyntaxHighlighter>
        <CopyCode text={codeSnippet2} />
      </div>
      <h1 className="mt-4 mb-2">Explain :</h1>
      <div className="ps-4 flex flex-col gap-2">
        <div className="flex item-center gap-2">
          <span> - </span>
          <p>
            then, in the Subscribe component you can take the ref that was
            forwarded from the parent component, an use it on a element in the
            Subscribe Component
          </p>
        </div>
      </div>

      <p className="mt-10">
        okay that's it, I hope you understand the explaination above, we would
        be gratefull if you subscribed to this blog.
        <br />
        <br />
        thanks and bye 👋
      </p>
    </TemplateBlog>
  );
};
export default UseRefInTheDifferentComponents;
