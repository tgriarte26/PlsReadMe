"use client";
import { useState } from "react";

import {
  Heading,
  Type,
  Bold,
  Italic,
  Code,
  List,
  Link as LinkIcon,
  Plus,
  BookOpen,
  AlertCircle,
  GitPullRequest,
} from "lucide-react";

interface BlocksPanelProps {
  onAddBlock: (markdown: string) => void;
}

export default function Blocks({ onAddBlock }: BlocksPanelProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const blockCategories = [
    {
      category: "Templates",
      blocks: [
        {
          label: "README Template",
          markdown: `# Project Title

## Description
A brief description of your project.

## Installation
\`\`\`bash
npm install
\`\`\`

## Usage
\`\`\`bash
npm start
\`\`\`

## Contributing
Please submit pull requests.

## License
MIT
`,
          icon: BookOpen,
        },
        {
          label: "Issue Template",
          markdown: `## Issue Title

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.
`,
          icon: AlertCircle,
        },
        {
          label: "Pull Request Template",
          markdown: `## Pull Request Title

**Description**
A summary of the changes made.

**Related Issue**
Link to the issue this PR addresses.

**Testing**
Describe how this was tested.
`,
          icon: GitPullRequest,
        },
      ],
    },

    {
      category: "Text",
      blocks: [
        { label: "Heading 1", markdown: "\n# Heading 1\n", icon: Heading },
        { label: "Heading 2", markdown: "\n## Heading 2\n", icon: Type },
        { label: "Heading 3", markdown: "\n### Heading 3\n", icon: Type },
        { label: "Bold Text", markdown: "\n**Bold text here**\n", icon: Bold },
        {
          label: "Italic Text",
          markdown: "\n*Italic text here*\n",
          icon: Italic,
        },
        {
          label: "Strikethrough",
          markdown: "\n~~Strikethrough~~\n",
          icon: Bold,
        },
        { label: "Inline Code", markdown: "\n`inline code`\n", icon: Code },
        { label: "Blockquote", markdown: "\n> Quote here\n", icon: Italic },
      ],
    },
    {
      category: "Lists",
      blocks: [
        {
          label: "Bullet List",
          markdown: "\n- Item 1\n- Item 2\n- Item 3\n",
          icon: List,
        },
        {
          label: "Numbered List",
          markdown: "\n1. First\n2. Second\n3. Third\n",
          icon: List,
        },
        {
          label: "Table",
          markdown:
            "\n| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n",
          icon: List,
        },
      ],
    },
    {
      category: "Media",
      blocks: [
        {
          label: "Link",
          markdown: "\n[Link text](https://example.com)\n",
          icon: LinkIcon,
        },
        {
          label: "Image",
          markdown: "\n![Alt text](https://example.com/image.png)\n",
          icon: LinkIcon,
        },
        { label: "Horizontal Rule", markdown: "\n---\n", icon: Code },
      ],
    },
    {
      category: "Code",
      blocks: [
        {
          label: "Code Block",
          markdown: "\n```js\nconsole.log('Hello world');\n```\n",
          icon: Code,
        },
      ],
    },
  ];

  return (
    <div className="flex-1 p-4 overflow-auto space-y-3">
      {blockCategories.map((cat) => {
        const isOpen = openCategory === cat.category;
        return (
          <div key={cat.category} className="mt-1.5">
            <div
              onClick={() => setOpenCategory(isOpen ? null : cat.category)}
              className="flex justify-between items-center cursor-pointer bg-[#30363d] p-5 text-white border-2 rounded-2xl mb-2 transition-all duration-200 hover:bg-[#3c444d]"
            >
              <span className="font-semibold select-none whitespace-nowrap truncate max-w-[80%]">{cat.category}</span>
              <span
                className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-45" : ""}`}
              >
                <Plus className="font-semibold" size={20} />
              </span>
            </div>
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-2"}`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col">
                  {cat.blocks.map((block) => {
                    const Icon = block.icon;
                    return (
                      <button
                        key={block.label}
                        onClick={() => onAddBlock(block.markdown)}
                        className="w-full flex items-center gap-3 bg-[#30363d] hover:bg-[#3c444d] p-4 transition mt-1.5 mb-1.5 rounded-2xl border-2 border-[#565c64]"
                      >
                        <Icon className="mb-0.5" size={20} />
                        <div className="select-none">{block.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
