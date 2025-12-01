"use client"

import {motion} from "motion/react"

export default function HeaderNav() {
  return (
    <nav className="space-x-6 lg:space-x-10 text-lg hidden md:block">
        {["Home", "Experience", "Projects", "Certificate", "Contact"].map((link, i) => (
          <a
            key={i}
            href={`#${link.toLowerCase()}`}
            className="hover:text-green-400 transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </nav>
  )
}
