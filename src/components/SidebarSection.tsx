"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface SidebarSectionProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

export default function SidebarSection({ title, links }: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full font-semibold text-gray-900 mb-1 hover:text-gray-700 transition-colors"
      >
        <span
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <MdExpandMore className="w-5 h-5" />
        </span>
        <span>{title}</span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 ml-4 mb-1 pt-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 hover:underline block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
