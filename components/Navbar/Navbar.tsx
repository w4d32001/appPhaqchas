"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if the user is logged in by checking the localStorage for a token
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const user = localStorage.getItem("user");
      if (user) {
        setUsername(user);
        console.log(user);
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
        if (rect.top <= 0 && rect.bottom >= 0) {
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
    // Clear localStorage and set the logged-in state to false
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-around items-center h-auto md:h-16 px-8 text-white transition-all duration-300 ${
        isScrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <Link
        href="#Inicio"
        className={`uppercase text-2xl flex items-center gap-2 ${
          activeLink === "Inicio" ? "text-gray-100" : ""
        }`}
      >
        <img src="/volleyball.png" alt="" className="w-10" />
        <h1 className="text-shadow-heavy font-Bebas-Neue">Phaqchas</h1>
      </Link>
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-row gap-4 text-xl font-sans items-center">
          <li>
            <Link
              href="#Inicio"
              className={`text-shadow-heavy ${
                activeLink === "Inicio" ? "text-bold underline" : ""
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#DondeEstamos"
              className={`text-shadow-heavy ${
                activeLink === "DondeEstamos" ? "text-bold underline" : ""
              }`}
            >
              Donde Estamos
            </Link>
          </li>
          <li>
            <Link
              href="#Disponibilidad"
              className={`text-shadow-heavy ${
                activeLink === "Disponibilidad" ? "text-bold underline" : ""
              }`}
            >
              Disponibilidad
            </Link>
          </li>
          <li>
            <Link
              href="#Deportes"
              className={`text-shadow-heavy ${
                activeLink === "Deportes" ? "text-bold underline" : ""
              }`}
            >
              Deportes
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
        {isLoggedIn ? (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {username && username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Button
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-800 font-sans transition-all"
            >
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <div className="flex gap-4">
            <Link href="auth/login">
              <Button className="bg-blue-700 hover:bg-blue-800 font-sans transition-all">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="auth/register">
              <Button className="bg-gray-700 hover:bg-gray-800 font-sans transition-all">
                Registrar
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
