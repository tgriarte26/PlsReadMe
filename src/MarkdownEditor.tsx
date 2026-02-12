'use client';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { githubDark } from '@uiw/codemirror-theme-github';

type MarkdownEditorProps = {
  markdownInput: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownEditor({ markdownInput, setMarkdownInput}: MarkdownEditorProps ) {

  return (
    <div className="flex flex-col container">
      
        <div className="flex">
          <CodeMirror
            autoFocus 
            className="w-[100%] min-h-screen border-2 border-white-300 overflow-x-hidden outline-white-300 resize-none text-[16px] text-black" 
            value={markdownInput}
            theme={githubDark}
            height="100vh"
            extensions={[markdown()]}
            onChange={(value) => setMarkdownInput(value)}
          ></CodeMirror>
        </div>
    </div>
  )
}


