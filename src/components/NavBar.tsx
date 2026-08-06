import { useState } from "react";
import {HugeiconsIcon} from "@hugeicons/react"
import { Menu,X } from "@hugeicons/core-free-icons";

type NavLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  links: NavLink[];
  logoText?: string;
};

export default function NavBar({ links, logoText = "Auralis" }: NavBarProps) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar font-sans sticky top-0  z-100 flex items-center justify-between px-6 py-4 h-21 border-b bg-background/5 backdrop-blur-sm">
      <div className="flex gap-20">
        <div className="flex items-center  gap-4">
          <span className="font-extrabold text-lg tracking-[-0.9px] text-[#18181B]">
            {logoText}
          </span>
        </div>
        {/* Desktop nav --hidden below md */}
        <ul className=" hidden md:flex items-center gap-6 text-[#71717A]">
          {links.map((link: NavLink) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-medium font-medium opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Desktop CTA --hidden below md */}
      <button className="hidden md:block items-center bg-black text-sm text-white font-medium px-3 h-9 rounded-2xl">
        {" "}
        Sign up
      </button>

      {/* Hamburger -- shown below md */}
      <button className="md:hidden" 
      onClick={()=>setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      >
        {isOpen ?  <HugeiconsIcon icon={X} size={24} /> : <HugeiconsIcon icon={Menu} size={24} />}
      </button>

{/* Mobile menu — conditionally rendered  */}
      {isOpen && (
           <div className="md:hidden flex flex-col gap-4 pt-6 pb-2">
          {links.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className="text-medium font-medium text-[#71717A]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-black text-sm text-white font-medium px-3 h-9 rounded-2xl w-full">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
