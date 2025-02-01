import Announcement from "@/components/Announcement/Announcement";
import Booking from "@/components/Booking/Booking";
import Deports from "@/components/Deports/Deports";
import ImageDeport from "@/components/ImageDeport/ImageDeport";
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMd from "@/components/NavbarMd/NavbarMd";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-svh bg-fondo bg-no-repeat relative bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <Announcement />
      <div className="relative z-10">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="lg:hidden bg-red-50d flex items-center justify-between w-svw  h-20 px-5  pr-8">
          <Logo />
          <Sheet>
            <SheetTrigger>
              <Menu strokeWidth={2} className="text-white text-3xl" />
            </SheetTrigger>
            <SheetContent className="bg-gray-800">
              <div className="">
                <NavbarMd />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <section id="Inicio" className="h-[calc(100svh-80px)] lg:h-svh">
          <div className="flex justify-center items-center h-5/6">
            <div className="text-center">
              <h1 className="text-[50px] md:text-[100px] lg:text-[150px] text-shadow-heavy font-julius text-gray-200">
                Phaqchas
              </h1>
              <p className="text-gray-200 text-shadow-heavy font-nunito text-md md:text-xl">
                Fuente de energía
              </p>
            </div>
          </div>
          <div className="flex items-center h-1/6 justify-center">
            <button className="bg-gray-900/50 hover:bg-gray-950/50 transition-all shadow-3xl border border-white text-xl md:text-3xl px-4 md:px-8 py-2 font-Bebas-Neue text-white rounded-lg">
              <Link href="#Disponibilidad">Consultar disponibilidad</Link>
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
          <div className="flex items-center justify-center bg-blue-gradient p-4">
            <div className="w-[500px] lg:w-[800px] bg-white">
              <div className="grid grid-cols-5 grid-rows-9 gap-1 font-nunito">
                <div className="row-span-6 odd:bg-gray-700 even:bg-gray-600"></div>
                <div className="col-span-4 row-span-2 flex items-center justify-center bg-gray-900 text-white">Campo 4</div>
                <div className="col-span-4 row-span-2 col-start-2 row-start-3 flex items-center justify-center bg-gray-900 text-white">
                  Campo 3
                </div>
                <div className="col-span-4 row-span-2 col-start-2 row-start-5 flex items-center justify-center bg-gray-900 text-white">
                  Campo 2
                </div>
                <div className="col-span-4 col-start-2 row-start-7 flex items-center justify-center bg-gray-900 text-white">Pasaje</div>
                <div className="col-span-4 row-span-2 col-start-2 row-start-8 flex gap-x-1">
                  <div className="bg-gray-900 text-white w-[95%] flex items-center justify-center">
                  Campo 1
                  </div>
                  <div className="bg-gray-900 text-white w-[5%] flex items-center justify-center">
                      <span className="rotate-90 text-xs">Entrada</span>
                  </div>
                </div>
                <div className="row-span-3 col-start-1 row-start-7 flex items-center justify-center bg-gray-900 text-white "><span className="-rotate-45 lg:rotate-0 text-sm lg:text-md"> Establecimiento</span></div>
              </div>
            </div>
          </div>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={1} field="Campo 1" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={2} field="Campo 2" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={3} field="Campo 3" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={4} field="Campo 4" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
        </section>
        <section
          id="DondeEstamos"
          className="h-svh bg-blue-gradient flex flex-col items-center py-14 gap-14"
        >
          <div className="h-auto bg-gray-600 w-full flex items-center justify-center">
            <span className="text-white text-center text-xl md:text-3xl">
              Nos puedes encontrar en...
            </span>
          </div>
          <div className="py-4 px-4  grid grid-cols-1 md:grid-cols-3 gap-2 items-center h-auto">
            <div className="bg-[#10192E] text-white p-4 rounded-xl h-full flex flex-col justify-around">
              <h2 className="text-[#6893cc] text-center text-3xl">Ubicación</h2>
              <p>
                Nos encontramos en la provincia de Abancay, en la intersección
                de Prolongación Arica con la calle Horacio Zeballos, a 5 minutos
                del parque Señor de la Caída.
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href="https://www.google.com/maps/@-13.6300254,-72.8793525,19z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  className="bg-[#6893cc] rounded-xl text-white py-3 px-5 hover:bg-[#6893cc]/90 transition-colors"
                  target="_blank"
                >
                  Abrir en Google Maps
                </Link>
              </div>
            </div>
            <div className="col-span-2">
              <img
                src="/assets/maps.png"
                alt=""
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
        <section className="h-10 bg-blue-gradient"></section>
      </div>
    </div>
  );
}
