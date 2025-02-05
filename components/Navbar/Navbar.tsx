"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { User } from "@/services/auth.service";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const user = localStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    } else {
      setIsLoggedIn(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({} as User);
  };

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-around items-center h-auto md:h-16 px-8 text-white transition-all duration-300 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <a
        href="#Inicio"
        onClick={(e) => handleSmoothScroll(e, "#Inicio")}
        className={`uppercase text-2xl flex items-center gap-2 ${
          activeLink === "Inicio" ? "text-gray-100" : ""
        }`}
      >
        <Image
          src="/volleyball.png"
          alt="Logo Phaqchas"
          width={40}
          height={40}
          className="w-10"
        />
        <h1 className="text-shadow-heavy font-Bebas-Neue">Phaqchas</h1>
      </a>

      <div className="mt-4 md:mt-0">
        <ul className="flex flex-row gap-4 text-xl font-sans items-center">
          <li>
            <a
              href="#Inicio"
              onClick={(e) => handleSmoothScroll(e, "#Inicio")}
              className={`text-shadow-heavy ${
                activeLink === "Inicio" ? "font-bold underline" : ""
              }`}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#Deportes"
              onClick={(e) => handleSmoothScroll(e, "#Deportes")}
              className={`text-shadow-heavy ${
                activeLink === "Deportes" ? "font-bold underline" : ""
              }`}
            >
              Deportes
            </a>
          </li>
          <li>
            <a
              href="#Disponibilidad"
              onClick={(e) => handleSmoothScroll(e, "#Disponibilidad")}
              className={`text-shadow-heavy ${
                activeLink === "Disponibilidad" ? "font-bold underline" : ""
              }`}
            >
              Disponibilidad
            </a>
          </li>
          <li>
            <a
              href="#DondeEstamos"
              onClick={(e) => handleSmoothScroll(e, "#DondeEstamos")}
              className={`text-shadow-heavy ${
                activeLink === "DondeEstamos" ? "font-bold underline" : ""
              }`}
            >
              Donde estamos
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-4 bg-gray-900/30 py-1 px-4 rounded-lg">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
              <span className="capitalize">{user.name}</span>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-red-700 py-2 px-4 hover:bg-red-800 font-sans transition-all"
            >
              Cerrar sesión
            </Button>
          </>
        ) : (
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button className="bg-blue-700 hover:bg-blue-800 font-sans transition-all">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gray-700 hover:bg-gray-800 font-sans transition-all">
                Registrarse
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}