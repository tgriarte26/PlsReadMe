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
    <div className="h-full w-full overflow-x-auto bg-white">
      <article className="prose prose-invert markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}
            components={{
              ul: ({ node, ...props}) => (
                <ul className="list-disc pl-6 space-y-1" {...props} />
              ),
              ol: ({ node, ...props}) => (
                <ol className="list-decimal pl-6 space-y-1" {...props}/>
              )
            }}>
            {markdownInput}
          </ReactMarkdown>
      </article>
    </div>
  );
}
