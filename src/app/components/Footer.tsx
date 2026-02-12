import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white bg-[#24292e] pb-5">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://github.com/tgriarte26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.linkedin.com/in/trevor-raphael-griarte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.instagram.com/trevorgriarte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
      </footer> 
  )
}
