"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu, X } from "lucide-react";
import UserNav from "./UserNav";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex md:gap-x-6 ml-14">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm hover:text-gray-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-6">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />

        {/* Dropdown menu toggle button */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none transition-all duration-200"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Bell className="h-5 w-5 text-gray-300 cursor-pointer hover:text-white" />
        <UserNav />
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black lg:hidden z-20">
          <ul className="flex flex-col items-start px-5 py-3">
            {links.map((link, idx) => (
              <li key={idx} className="py-2">
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href
                      ? "text-white font-semibold underline"
                      : "text-gray-300"
                  } text-sm hover:text-white`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
