'use client';
import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownPreviewProps = {
  markdownInput: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownPreview({ markdownInput, setMarkdownInput} : MarkdownPreviewProps) {

  return (
      <div className="wrapper">
        <div className="head">
          Preview
        </div>

        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{ code: CodeBlock }}>
          {markdownInput}
        </ReactMarkdown>
      </div>
  )
}


const CodeBlock: Components['code'] = ({className, children }) => {
  const isBlock = Boolean(className);
  
  if (!children) return null;

  if (!isBlock) {
    return (
      <code className="bg-gray-200 px-1 rounded">
        {children}
      </code>
    )
  }

  return (
    <pre className="bg-gray-900 p-3 rounded overflow-x-auto">
      <code className={className}>
        {children}
      </code>
    </pre>
  )
}