"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      localStorage.setItem("scrollTarget", targetId);
      router.push("/");
    }

  };

  useEffect(() => {
    const targetId = localStorage.getItem("scrollTarget");
    if (targetId) {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        localStorage.removeItem("scrollTarget");
      }, 500);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" onClick={(e) => handleSmoothScroll(e, "Inicio")} className="flex items-center gap-2">
        <Image src="/volleyball.png" alt="Logo Phaqchas" width={40} height={40} className="w-10" />
        <h1 className="font-Bebas-Neue text-orange-700 font-bold text-2xl">Phaqchas</h1>
      </Link>

      <ul className="hidden md:flex gap-6 text-lg font-semibold">
  {[
    { name: "Inicio", id: "Inicio" },
    { name: "Anuncios", id: "Anuncio" },
    { name: "Deportes", id: "Deportes" },
    { name: "Dónde Estamos", id: "DondeEstamos" },
    { name: "Reservas", id: "reservations", link: "/reservations" },
  ].map((item) => (
    <li key={item.id}>
      {item.link ? (
        <Link href={item.link} className="hover:text-orange-600">
          {item.name}
        </Link>
      ) : (
        <a
          href={`#${item.id}`}
          onClick={(e) => handleSmoothScroll(e, item.id)}
          className={`hover:text-orange-600 ${
            activeLink === item.id ? "font-bold underline text-brown-600" : ""
          }`}
        >
          {item.name}
        </a>
      )}
    </li>
  ))}
</ul>


      <Link href="/auth/register" className="hidden md:block">
        <button className="bg-green-700 hover:bg-green-800 text-xl font-bold text-white rounded-xl px-6 py-3">Registrate</button>
      </Link>

      <div className="lg:hidden fixed top-0 left-0  z-50  md:flex-row md:h-16 bg-gray-800 flex items-center justify-between w-svw  h-20 px-5  pr-8">
        <Logo />
        <Sheet>
          <SheetTrigger>
            <Menu  strokeWidth={2} className="text-white text-3xl" />
          </SheetTrigger>
          <SheetContent className="bg-gray-800 text-white">
            <div className="flex justify-between items-center py-4 px-6">
              <h2 className="text-2xl font-bold">Menú</h2>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-semibold px-6">
              {[
                { name: "Inicio", id: "Inicio" },
                { name: "Anuncios", id: "Anuncio" },
                { name: "Deportes", id: "Deportes", link: "/Deportes" },
                { name: "Dónde Estamos", id: "DondeEstamos" },
                { name: "Reservas", id: "reservations", link: "/reservations" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link || "/"}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className={`block py-2 text-white hover:text-orange-500 ${
                      activeLink === item.id ? "font-bold underline text-orange-500" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 mt-6">
              <Link href="/auth/register">
                <button className="w-full bg-green-700 font-bold hover:bg-green-800 text-xl">Registrarse</button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
