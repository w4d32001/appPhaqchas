'use client'
import Announcement from "@/components/Announcement/Announcement";
import Booking from "@/components/Booking/Booking";
import Crokis from "@/components/Crokis/Crokis";
import Deports from "@/components/Deports/Deports";
import ImageDeport from "@/components/ImageDeport/ImageDeport";
import LazyLoad from "@/components/LazyLoad/LazyLoad";
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMd from "@/components/NavbarMd/NavbarMd";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="h-svh bg-fondo bg-no-repeat relative bg-cover bg-center">
      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      <Announcement onEmpty={setIsEmpty} />
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
        <section
          id="Inicio"
          className="h-[calc(100svh-80px)] lg:h-svh relative flex items-center"
        >
          <div className="relative z-10 flex justify-start items-center h-full w-full ">
            <div className="flex flex-col justify-center gap-y-16 items-center font-semibold rounded-full p-4 md:p-16 text-white">
              <h1
                data-aos="fade-down"
                className="text-[50px] text-white font-bold text-shadow-neutro md:text-[100px] lg:text-[130px] font-julius p-0"
              >
                Phaqchas
              </h1>
              <p
                data-aos="fade-down"
                className="font-nunito text-shadow-heavy text-md md:text-xl md:max-w-2xl text-justify "
              >
                <span className="text-orange-700 uppercase">Phaqchas</span> -
                Centro Deportivo es el lugar ideal para los amantes del deporte.
                Contamos con canchas modernas y equipadas para voleibol, futsal
                y otras disciplinas, ofreciendo un espacio perfecto para
                entrenar, competir y disfrutar. Únete a nuestra comunidad
                deportiva y vive la pasión del deporte en Phaqchas.
              </p>
              <button className="bg-green-600 hover:bg-green-700 transition-all shadow-3xl text-xl md:text-3xl px-4 md:px-8 py-2 font-Bebas-Neue text-white rounded-lg">
                <Link href="#Disponibilidad">Consultar disponibilidad</Link>
              </button>
            </div>
          </div>
        </section>
        <div className="h-auto bg-green-600 flex items-center justify-center">
          <span
            data-aos="fade-up"
            className="text-white text-xl md:text-3xl text-center py-2"
          >
            Deportes y juegos
          </span>
        </div>
        <LazyLoad>
          <section
            data-aos="fade-up"
            id="Deportes"
            className="px-8 pb-8 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-blue-950 gap-4 items-center">
              <div className="mg:col-span:1 lg:col-span-2">
                <Deports />
              </div>
            </div>
          </section>
        </LazyLoad>
        <div className="h-auto bg-green-600 flex items-center justify-center">
          <span
            data-aos="fade-up"
            className="text-white text-xl md:text-3xl text-center py-2"
          >
            Visualiza tiempos disponibles este mes
          </span>
        </div>

        <section id="Disponibilidad" className="bg-white">
          <LazyLoad>
            <div className="py-4 px-2  flex gap-2 items-center">
              <Booking id={1} field="Campo 1" />
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="py-4 px-2 flex gap-2 items-center">
              <Booking id={2} field="Campo 2" />
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="py-4 px-2 flex gap-2 items-center">
              <Booking id={3} field="Campo 3" />
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="py-4 px-2  flex gap-2 items-center">
              <Booking id={4} field="Campo 4" />
            </div>
          </LazyLoad>
        </section>
        <div className="h-auto bg-green-600 w-full flex items-center justify-center mt-4">
          <span
            data-aos="fade-up"
            className="text-white text-center text-xl md:text-3xl py-2"
          >
            Nos puedes encontrar en...
          </span>
        </div>
        <LazyLoad>
          <section
            id="DondeEstamos"
            className="h-svh flex flex-col items-center py-14 gap-14"
          >
            <div
              data-aos="fade-up"
              className="py-4 px-4  grid grid-cols-1 md:grid-cols-3 gap-2 items-center h-auto"
            >
              <div className="bg-orange-700 text-white p-4 rounded-xl h-full flex flex-col justify-around">
                <h2 className="text-white text-center text-3xl">
                  Ubicación
                </h2>
                <p>
                  Nos encontramos en la provincia de Abancay, en la intersección
                  de Prolongación Arica con la calle Horacio Zeballos, a 5
                  minutos del parque Señor de la Caída.
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    href="https://www.google.com/maps/@-13.6300254,-72.8793525,19z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                    className="bg-green-700 rounded-xl text-white py-3 px-5 hover:bg-green-700/90 transition-colors"
                    target="_blank"
                  >
                    Abrir en Google Maps
                  </Link>
                </div>
              </div>
              <div className="col-span-2">
                <div className="w-full h-[250px] md:h-[350px] lg:h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d864.601923035708!2d-72.8793525!3d-13.6300254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d03211e390697%3A0xf70e6f08ff6afe89!2sCampo%20Deportivo%20Las%20Facchas%2C%20Abancay%2003001!5e1!3m2!1ses-419!2spe!4v1738687223850!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </LazyLoad>
        <footer className="bg-blue-950 w-full py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center md:text-left md:px-16">
            {/* Redes Sociales */}
            <div className="flex flex-col justify-center md:items-start gap-4">
              <span className="text-lg font-semibold">
                Nuestras redes sociales
              </span>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61571637322910"
                  target="_blank"
                >
                  <Facebook />
                </Link>
              </div>
              <a
                href="https://wa.me/51929918682"
                target="_blank"
                className="text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors py-2 px-4"
                rel="noopener noreferrer"
              >
                Reserve por WhatsApp
              </a>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-lg font-semibold">Más información</span>
              <span>Reserve al número: 987654321</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
