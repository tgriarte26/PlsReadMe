import React, { useState } from 'react';
import MarkdownEditor from '../../MarkdownEditor';
import MarkdownPreview from '../../MarkdownPreview';

const MarkdownComponent = () => {
  const [markdownInput, setMarkdownInput] = useState<string>('');

  return (
    <div>
      <MarkdownEditor markdownInput={markdownInput} setMarkdownInput={setMarkdownInput} />
      <MarkdownPreview markdownInput={markdownInput} setMarkdownInput={setMarkdownInput} />
    </div>
  )
}

export default MarkdownComponent;