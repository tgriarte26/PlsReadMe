"use client";
import React from "react";

type HeaderProps = {
  markdownInput: string;
}

export default function Header({markdownInput}: HeaderProps) {

  const downloadReadme = () => {
    const blob = new Blob([markdownInput], {type: "text/markdown"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <header>
      <div className="flex flex-col">
        <div className="flex bg-[#24292e] justify-between items-center w-full">
          <h1 className="font-mono text-4xl p-5 text-white select-none">PlsReadMe</h1>
          <button 
            onClick={downloadReadme}
            className="font-mono m-5 px-4 py-2 bg-gray-300 rounded select-none">
            Download
          </button>
        </div>
      </div>
      
      <div className="p-0.5 bg-gray-300"></div>
    </header>
  );
}

