"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownPreviewProps = {
  markdownInput: string;
};

export default function MarkdownPreview({
  markdownInput,
}: MarkdownPreviewProps) {
  return (
    <div className="min-h-screen w-full overflow-x-auto bg-white">
      <article className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownInput}
        </ReactMarkdown>
      </article>
    </div>
  );
}
