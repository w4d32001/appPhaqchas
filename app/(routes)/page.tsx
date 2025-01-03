import Booking from "@/components/Booking/Booking";
import Deports from "@/components/Deports/Deports";
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMd from "@/components/NavbarMd/NavbarMd";
import Table from "@/components/Table/Table";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="h-svh bg-fondo bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden flex items-center justify-between w-svw  h-20 px-4">
          <Logo />
          <Sheet>
            <SheetTrigger>
              <Menu strokeWidth={2} className="text-white" />
            </SheetTrigger>
            <SheetContent className="bg-gray-800">
              <div className="">
                <NavbarMd />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <section id="Inicio" className="h-[calc(100svh-80px)] md:h-svh">
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

        <section id="Deportes" className="p-8 bg-blue-gradient">
          <h2 className="text-center py-4 text-3xl text-white">
            Deportes y juegos
          </h2>
          <Deports />
        </section>
        <div className="h-auto bg-gray-600 flex items-center justify-center">
          <span className="text-white text-xl md:text-3xl text-center py-2">
            Visualiza tiempos disponibles este mes
          </span>
        </div>
        <section id="Disponibilidad">
          <div className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={1} field="Campo 1" />
            <div>
              <img
                src="/assets/siluetavolley.png"
                alt=""
                className="invert brightness-200"
              />
            </div>
          </div>
          <div className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={2} field="Campo 2" />
            <div>
              <img
                src="/assets/siluetavolley.png"
                alt=""
                className="invert brightness-200"
              />
            </div>
          </div>
          <div className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={3} field="Campo 3" />
            <div>
              <img
                src="/assets/siluetavolley.png"
                alt=""
                className="invert brightness-200"
              />
            </div>
          </div>
          <div className="py-8 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={4} field="Campo 4" />
            <div>
              <img
                src="/assets/siluetavolley.png"
                alt=""
                className="invert brightness-200"
              />
            </div>
          </div>
        </section>
        <section id="DondeEstamos" className="h-svh bg-blue-gradient flex flex-col items-center py-14 gap-14">
          <div className="h-auto bg-gray-600 w-full flex items-center justify-center">
            <span className="text-white text-center text-xl md:text-3xl">
              Nos puedes encontrar en...
            </span>
          </div>
          <div className="py-8 px-4  grid grid-cols-1 md:grid-cols-3 gap-2 items-center h-auto">
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
          </div>
        </section>
        <section className="h-10 bg-blue-gradient">

        </section>
      </div>
    </div>
  );
}
