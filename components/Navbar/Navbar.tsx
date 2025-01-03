'use client'
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-around items-center h-auto md:h-16 px-8 text-white transition-all duration-300 ${
        isScrolled ? 'bg-gray-800' : 'bg-transparent'
      }`}
    >
      <Link href="" className="uppercase text-2xl flex items-center gap-2">
        <img src="/volleyball.png" alt="" className="w-10" />
        <h1 className="text-shadow-heavy font-Bebas-Neue">Phaqchas</h1>
      </Link>
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row gap-4 font-sans">
          <li>
            <Link href="" className="text-shadow-heavy">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="" className="text-shadow-heavy">
              Donde Estamos
            </Link>
          </li>
          <li>
            <Link href="" className="text-shadow-heavy">
              Disponibilidad
            </Link>
          </li>
          <li>
            <Link href="" className="text-shadow-heavy">
              Deportes
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
        <Link href="auth/login">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <Button className="bg-red-700 hover:bg-red-800 font-sans transition-all">
          Cerrar Sesión
        </Button>
      </div>
    </nav>
  );
}
