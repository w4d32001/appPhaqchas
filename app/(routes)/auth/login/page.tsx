import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-custom-gradient h-svh overflow-y-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-3 p-4 ">
        <div className="text-white w-full px-8 py-10 gap-10 flex flex-col items-center col-span-1">
          <h2 className="uppercase text-3xl">Phaqchas</h2>
          <span className="text-center font-sans">
            Inicia sesion para la disponibilidad de horarios deportes,
            promociones y mas noticias
          </span>
          <div className="w-full flex flex-col gap-y-10">
            <form action="" >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="email">Correo electronico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ejemplo@gmail.com"
                    className="py-2 px-4 outline-none rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="py-2 px-4 outline-none rounded-lg"
                  />
                </div>
                <button className="bg-[#162D3A] text-white py-3 rounded-xl hover:bg-[#162D3A]/60 transition-colors">
                  Iniciar sesion
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-center text-xl flex items-center px-8"> <hr className="w-1/3"/> <span className="w-1/3">o</span> <hr className="w-1/3"/></span>
              <span className="text-center">
                No tienes cuenta aun? <Link href="../auth/register" className="text-blue-600">Registrate</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-screen col-span-2">
          <img
            src="/assets/voley1.jpg"
            alt=""
            className="h-[calc(100vh-32px)] w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}