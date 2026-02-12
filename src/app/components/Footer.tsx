import { Github, Linkedin, Instagram, Heart} from "lucide-react"

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white bg-[#24292e] pb-5">
        
        <div className="flex font-mono pl-5 pr-5 text-white select-none cursor-pointer">
            <span>Made by trev</span>
            <Heart className="flex pl-2 text-white-400 fill-red-400" />
        </div>
        <div className="flex gap-6">
<a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://github.com/tgriarte26"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Github className="mb-1 fill-gray-400" size={25} />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.linkedin.com/in/trevor-raphael-griarte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="mb-1 fill-blue-400" size={25} />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.instagram.com/trevorgriarte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="mb-1 fill-red-300" size={25} />
          Instagram
        </a>
        </div>
        
      </footer> 
  )
}
