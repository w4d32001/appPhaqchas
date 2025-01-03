import Deports from "@/components/Deports/Deports";
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMd from "@/components/NavbarMd/NavbarMd";
import Tabla from "@/components/Table/Tabla";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="h-svh bg-fondo bg-no-repeat bg-cover bg-center overflow-y-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden flex items-center justify-between w-svw  h-20 px-4">
          <Logo />
          <Sheet>
            <SheetTrigger><Menu strokeWidth={2} className="text-white"/></SheetTrigger>
            <SheetContent className="bg-gray-800">
              <div className="">
                <NavbarMd />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <section className="h-[calc(100svh-80px)] md:h-svh">
          <div className="flex justify-center items-center h-5/6">
            <div className="text-center">
              <h1 className="text-[70px] text-shadow-heavy font-Bebas-Neue text-gray-200">
                Phaqchas
              </h1>
              <p className="text-gray-200 text-shadow-heavy font-sans text-md md:text-xl">
                Campo deportivo inspirado para que los jovenes hagan deporte
              </p>
            </div>
          </div>
          <div className="flex items-center h-1/6 justify-center">
            <button className="bg-green-700 hover:bg-green-800 transition-all shadow-lg text-xl md:text-3xl px-4 md:px-8 py-2 font-sans text-white rounded-lg">
              Consultar disponibilidad
            </button>
          </div>
        </section>
        <section className="p-8 bg-blue-gradient">
          <h2 className="text-center py-4 text-3xl text-white">
            Deportes y juegos
          </h2>
          <Deports />
        </section>
        <div className="h-auto bg-gray-600 flex items-center justify-center">
          <span className="text-white text-xl md:text-3xl text-center">
            Visualiza tiempos disponibles este mes
          </span>
        </div>
        <section className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
          <div className="w-full md:w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 items-center w-full">
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 1
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 2
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 3
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 4
              </button>
            </div>
            <div className="min-w-full overflow-x-auto">
              <Tabla />
            </div>
          </div>
          <div>
            <img
              src="/assets/siluetavolley.png"
              alt=""
              className="invert brightness-200"
            />
          </div>
        </section>
        <section className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
          <div className="w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 1
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 2
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 3
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 4
              </button>
            </div>

            <table className="w-full text-white">
              <thead>
                <tr>
                  <th className=""></th>

                  <th className="border px-4 py-2 bg-blue-600">Hora</th>
                  <th className="border px-4 py-2 bg-blue-500">Lunes</th>
                  <th className="border px-4 py-2 bg-blue-500">Martes</th>
                  <th className="border px-4 py-2 bg-blue-500">Miércoles</th>
                  <th className="border px-4 py-2 bg-blue-500">Jueves</th>
                  <th className="border px-4 py-2 bg-blue-500">Viernes</th>
                  <th className="border px-4 py-2 bg-blue-500">Sábado</th>
                  <th className="border px-4 py-2 bg-blue-500">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={13} className="rotate-90 border">
                    <div className="w-20">Campo 1</div>
                  </td>
                  <td className="border px-4 py-2 text-xs">
                    08:00 AM a 09:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 AM a 10:AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    10:00 AM a 11:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">11:00 AM a 12 AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    12:00 PM a 01:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    01:00 PM a 02:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    02:00 PM a 03:00PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    04:00 PM a 05:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    05:00 PM a 06:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    07:00 PM a 08:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    08:00 PM a 09:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 PM a 10:PM</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="/assets/siluetavolley.png"
              alt=""
              className="invert brightness-200"
            />
          </div>
        </section>
        <section className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
          <div className="w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 1
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 2
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 3
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 4
              </button>
            </div>

            <table className="w-full text-white">
              <thead>
                <tr>
                  <th className=""></th>

                  <th className="border px-4 py-2 bg-blue-600">Hora</th>
                  <th className="border px-4 py-2 bg-blue-500">Lunes</th>
                  <th className="border px-4 py-2 bg-blue-500">Martes</th>
                  <th className="border px-4 py-2 bg-blue-500">Miércoles</th>
                  <th className="border px-4 py-2 bg-blue-500">Jueves</th>
                  <th className="border px-4 py-2 bg-blue-500">Viernes</th>
                  <th className="border px-4 py-2 bg-blue-500">Sábado</th>
                  <th className="border px-4 py-2 bg-blue-500">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={13} className="rotate-90 border">
                    <div className="w-20">Campo 1</div>
                  </td>
                  <td className="border px-4 py-2 text-xs">
                    08:00 AM a 09:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 AM a 10:AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    10:00 AM a 11:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">11:00 AM a 12 AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    12:00 PM a 01:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    01:00 PM a 02:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    02:00 PM a 03:00PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    04:00 PM a 05:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    05:00 PM a 06:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    07:00 PM a 08:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    08:00 PM a 09:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 PM a 10:PM</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="/assets/siluetavolley.png"
              alt=""
              className="invert brightness-200"
            />
          </div>
        </section>
        <section className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
          <div className="w-5/6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 1
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 2
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 3
              </button>
              <button className="text-white rounded-xl bg-blue-400 py-2 px-4 text-xl">
                Semana 4
              </button>
            </div>

            <table className="w-full text-white">
              <thead>
                <tr>
                  <th className=""></th>

                  <th className="border px-4 py-2 bg-blue-600">Hora</th>
                  <th className="border px-4 py-2 bg-blue-500">Lunes</th>
                  <th className="border px-4 py-2 bg-blue-500">Martes</th>
                  <th className="border px-4 py-2 bg-blue-500">Miércoles</th>
                  <th className="border px-4 py-2 bg-blue-500">Jueves</th>
                  <th className="border px-4 py-2 bg-blue-500">Viernes</th>
                  <th className="border px-4 py-2 bg-blue-500">Sábado</th>
                  <th className="border px-4 py-2 bg-blue-500">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={13} className="rotate-90 border">
                    <div className="w-20">Campo 1</div>
                  </td>
                  <td className="border px-4 py-2 text-xs">
                    08:00 AM a 09:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 AM a 10:AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    10:00 AM a 11:00 AM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">11:00 AM a 12 AM</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                </tr>

                <tr>
                  <td className="border px-4 py-2 text-xs">
                    12:00 PM a 01:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    01:00 PM a 02:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    02:00 PM a 03:00PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    04:00 PM a 05:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    05:00 PM a 06:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    07:00 PM a 08:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">
                    08:00 PM a 09:00 PM
                  </td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-xs">09:00 PM a 10:PM</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                  <td className="border px-4 py-2">Reservado</td>
                  <td className="border px-4 py-2">Disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="/assets/siluetavolley.png"
              alt=""
              className="invert brightness-200"
            />
          </div>
        </section>
        <div className="h-auto bg-gray-600 flex items-center justify-center">
          <span className="text-white text-center text-xl md:text-3xl">
            Nos puedes encontrar en...
          </span>
        </div>
        <section className="py-8 px-4 bg-blue-gradient grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <div className="bg-[#10192E] text-white p-4 rounded-xl h-full flex flex-col justify-around">
            <h2 className="text-[#6893cc] text-center text-3xl">Ubicación</h2>
            <p>
              Estamos ubicados con nuestra sede principal en la provincia de
              abancay a 5 minutos de la plaza caida
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-[#6893cc] rounded-xl text-white py-3 px-5 hover:bg-[#6893cc]/90 transition-colors">
                Abrir en Google Maps
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src="/assets/maps.png"
              alt=""
              className="object-cover rounded-xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
