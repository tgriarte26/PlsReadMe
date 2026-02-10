"use client";
import React, { useState } from "react";

export default function Header() {
  const defaultTemplate = `![Hi! My name is Trevor Griarte.👋](https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif)

  ![Profile views](https://komarev.com/ghpvc/?username=tgriarte26&label=Profile%20views&color=0e75b6&style=flat)

  **<h3 align="left">Connect with me:</h3>** 
  <p align="left">
    <a href="https://www.linkedin.com/in/trevor-raphael-griarte" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="28">
    </a> 
    <a href="https://www.instagram.com/trevorgriarte" target="_blank">
      <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" height="28">
    </a>
  </p>

  **<h3 align="left">🚀 Aspiring first-year computer science student who loves creating websites and apps related to education.</h3>**

  **<h3 align="left">Rapid Fire</h3>**

  - 💼 I'm currently working on: **💻 Developing a web app that helps students find internship opportunities.**
  - 🌱 I'm currently learning: **📚 Exploring Python and React Native**
  - 💬 Ask me about: **💡 JavaScript, React, Node.js, HTML/CSS**
  - ⚡ Fun fact: **🕹️I was top 10 in the Rocket League casual playlist in the US**
  - 📂 Portfolio: **<a href="https://trevsportfolio.vercel.app/" target="_blank">https://trevsportfolio.vercel.app/</a>**

  **<h3 align="left">Skills</h3>**

  <div style="display: flex; flex-wrap: wrap; gap: 4px; justify-content: left;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="28" alt="JavaScript">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="28" alt="React">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="28" alt="HTML5">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="28" alt="CSS3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="28" alt="Node.js">
  </div>`;
  const [markdownInput, setMarkdownInput] = useState(defaultTemplate);

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
          <h1 className="font-mono text-4xl p-5 text-gray-300">PlsReadMe</h1>
          <button 
            onClick={downloadReadme}
            className="font-mono m-5 px-4 py-2 bg-gray-300 rounded">
            Download
          </button>
        </div>
      </div>
      
      <div className="p-0.5 bg-gray-300"></div>
    </header>
  );
}

