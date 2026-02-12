"use client";
import React, { useState } from "react";
import { Copy, Check, Download } from "lucide-react";

type HeaderProps = {
  markdownInput: string;
};

export default function Header({ markdownInput }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdownInput);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const downloadReadme = async () => {

    const blob = new Blob([markdownInput], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    try {
      a.href = url;
      a.download = "README.md";
      a.click();
      URL.revokeObjectURL(url);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 1000)
    } catch (err) {
      console.log("Failed to download: ", err);
    }
  };

  const handleTitleClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  }

  return (
    <header>
      <div className="flex flex-col">
        <div className="flex items-center justify-between bg-[#24292e] w-full">
          <h1 className="font-mono text-4xl p-5 text-white select-none cursor-pointer transition-transform duration-1000"
          onClick={handleTitleClick}
          style={{ transform: isSpinning ? "rotate(360deg)" : "rotate(0deg)"}}>
            PlsReadMe
          </h1>
          <div className="flex float-right">
            <button
              onClick={handleCopy}
              className="flex items-center font-mono mt-5 mb-5 px-4 py-2 bg-gray-300 rounded select-none justify-between"
            >
              {copied ? <Check size={26} /> : <Copy size={26} />}
            </button>
            <button
              onClick={downloadReadme}
              className="font-mono m-5 px-4 py-2 bg-gray-300 rounded select-none"
            >
              {downloaded ? <Check size={26} /> : <Download size={26} />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-0.5 bg-gray-300"></div>
    </header>
  );
}
