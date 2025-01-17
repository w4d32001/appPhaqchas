"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo/Logo';

export default function NavbarMd() {
    const [activeLink, setActiveLink] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const user = localStorage.getItem("user");
            if (user) {
                setUsername(user);
            }
        } else {
            setIsLoggedIn(false);
        }

        const handleScroll = () => {
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

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <nav className={`w-full h-svh flex flex-col justify-between py-8 items-start md:h-16 px-8 text-white transition-all duration-300`}>
            <Logo />
            <div className="mt-4 md:mt-0 mb-8">
                <ul className="flex flex-col justify-between gap-4 font-sans">
                    <li>
                        <Link href="#Inicio" className={`text-shadow-heavy ${activeLink === 'Inicio' ? 'text-bold underline' : ''}`}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#DondeEstamos" className={`text-shadow-heavy ${activeLink === 'DondeEstamos' ? 'text-bold underline' : ''}`}>
                            Donde Estamos
                        </Link>
                    </li>
                    <li>
                        <Link href="#Disponibilidad" className={`text-shadow-heavy ${activeLink === 'Disponibilidad' ? 'text-bold underline' : ''}`}>
                            Disponibilidad
                        </Link>
                    </li>
                    <li>
                        <Link href="#Deportes" className={`text-shadow-heavy ${activeLink === 'Deportes' ? 'text-bold underline' : ''}`}>
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
                            <AvatarFallback>{username && username.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <Button onClick={handleLogout} className="bg-red-700 hover:bg-red-800 font-sans transition-all">
                            Cerrar Sesión
                        </Button>
                    </>
                ) : (
                    <div className="flex flex-col gap-4">
                        <Link href="auth/login">
                            <Button className="bg-blue-700 hover:bg-blue-800 font-sans transition-all">
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link href="auth/register">
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
