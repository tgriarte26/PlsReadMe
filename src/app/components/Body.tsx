"use client";
import { useState } from "react";
import MarkdownEditor from "../../MarkdownEditor";
import MarkdownPreview from "../../MarkdownPreview";
export default function Body() {
  const [markdownInput, setMarkdownInput] = useState<string>("");

  return (
    <div className="font-mono flex">
      <div className="float-left w-2/8 p-5 text-white bg-[#24292e]">
        <div className="border p-15 justify-items-center"></div>
      </div>
      <div className="float-left w-3/8 p-5 text-white bg-[#24292e]">
        <div className="text-center text-2xl pb-2">Editor</div>
        <div className="border md:min-h-screen justify-items-center">
          <MarkdownEditor
            markdownInput={markdownInput}
            setMarkdownInput={setMarkdownInput}
          />
        </div>
      </div>
      <div className="float-left w-3/8 p-5 text-white bg-[#24292e]">
        <div className="text-center text-2xl pb-2">Preview</div>
        <div className="border md:min-h-screen justify-items-center">
          <MarkdownPreview
            markdownInput={markdownInput}
          />
        </div>
      </div>
    </div>
  );
}
