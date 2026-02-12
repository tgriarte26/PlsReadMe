"use client";
import { useState } from "react";
import MarkdownEditor from "@/MarkdownEditor";
import MarkdownPreview from "@/MarkdownPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blocks from "./components/Blocks";
export default function Page() {
  const [markdownInput, setMarkdownInput] = useState<string>("");
  const addBlock = ( markdown: string) => {
    setMarkdownInput((prev) => prev + markdown);
  }
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <div className="sticky top-0 z-10">
        <Header markdownInput={markdownInput} />
      </div>
      <div className="flex flex-1 flex-col md:flex-row min-h-0">
        <div className="float-left md:w-2/10 p-5 text-white bg-[#24292e] flex flex-col">
          <div className="text-center text-2xl pb-2 select-none">Blocks</div>
          <div className="flex-1 border-3 overflow-auto rounded hide-scrollbar">
            <Blocks onAddBlock={addBlock}/>
          </div>
        </div>
        <div className="float-left md:w-4/10 p-5 text-white bg-[#24292e] flex flex-col">
          <div className="text-center text-2xl pb-2 select-none ">Editor</div>
          <div className="flex-1 border-3 min-h-0 justify-items-center overflow-auto rounded hide-scrollbar">
            <MarkdownEditor
              markdownInput={markdownInput}
              setMarkdownInput={setMarkdownInput}
            />
          </div>
        </div>
        <div className="float-left md:w-4/10 p-5 text-white bg-[#24292e] flex flex-col">
          <div className="text-center text-2xl pb-2 select-none">Preview</div>
          <div className="flex-1 border-5 min-h-0 justify-items-center overflow-auto">
            <MarkdownPreview markdownInput={markdownInput} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
