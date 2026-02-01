'use client';
import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownPreviewProps = {
  markdownInput: string;

}

export default function MarkdownPreview({ markdownInput } : MarkdownPreviewProps) {

  return (
      <div className="flex flex-col container">
        <div className="min-h-screen flex w-[100%] h-[100%] border-2 border-white-300 text-1.5xl outline-white-300 overflow-x-auto">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{ code: CodeBlock }}>
            {markdownInput}
        </ReactMarkdown>
        </div>

      </div>
  )
}


const CodeBlock: Components['code'] = ({ className, children}) => {
  const isBlock = className?.startsWith('language-');

  if (!children) return null;

  if (!isBlock) {
    return (
      <code className="bg-gray-200 px-1 rounded">
       
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