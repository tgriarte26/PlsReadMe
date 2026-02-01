'use client';
import React from 'react';

type MarkdownEditorProps = {
  markdownInput: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownEditor({ markdownInput, setMarkdownInput}: MarkdownEditorProps ) {

  return (
    <div className="flex">
      <div className="overflow-hidden">
        <div className="text-2xl text-center pb-2">Markdown</div>
        <textarea
          autoFocus 
          className="w-xl border-2 border-white-300 overflow-x-hidden text-1.5xl resize-none outline-white-300" 
          value={markdownInput}
          onChange={ (e) => setMarkdownInput(e.target.value) }
          ></textarea>
      </div>
    </div>
  )
}


