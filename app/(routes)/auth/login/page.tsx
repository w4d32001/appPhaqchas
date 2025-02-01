'use client'
import Link from "next/link";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/Input/Input";

export default function Page() {
  const { dni, setDni, password, setPassword, errors, handleLogin } = useAuth()

  return (
    <div className="bg-custom-gradient h-svh overflow-y-hidden relative">
      <Link href="/" className="absolute py-2 px-8 bg-gray-900 top-1 left-1 text-white hover:bg-gray-950 rounded-full">Inicio</Link>
      <div className="h-full grid grid-cols-1 lg:grid-cols-3 p-4 ">
        <div className="text-white w-full px-8 py-10 gap-10 flex flex-col items-center col-span-1">
          <h2 className="uppercase text-3xl">Phaqchas</h2>
          <span className="text-center font-sans">
          Inicia sesión para acceder a promociones y más noticias.
          </span>
          <div className="w-full flex flex-col gap-y-10">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  name="dni"
                  placeholder="12345678"
                  label="DNI"
                  value={dni}
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDni(e.target.value)}
                />
                {errors.dni && (
                  <span className="text-red-600 text-sm">{errors.dni}</span>
                )}
                <Input
                  type="password"
                  name="password"
                  placeholder="*********"
                  label="Contraseña"
                  value={password}
                  required={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">{errors.password}</span>
                )}
                {errors.general && (
                  <span className="text-red-600 text-sm">{errors.general}</span>
                )}
                <button
                  type="submit"
                  className="bg-[#162D3A] text-white py-3 rounded-xl hover:bg-[#162D3A]/60 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-center text-xl flex items-center px-8">
                <hr className="w-1/3" /> <span className="w-1/3">o</span>{" "}
                <hr className="w-1/3" />
              </span>
              <span className="text-center">
                ¿No tienes cuenta aún?{" "}
                <Link href="../auth/register" className="text-blue-600">
                  Regístrate
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-screen col-span-2">
          <img
            src="/assets/voley1.jpeg"
            alt=""
            className="h-[calc(100vh-32px)] w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
