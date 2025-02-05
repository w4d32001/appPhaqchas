import Announcement from "@/components/Announcement/Announcement";
import Booking from "@/components/Booking/Booking";
import Deports from "@/components/Deports/Deports";
import ImageDeport from "@/components/ImageDeport/ImageDeport";
import LazyLoad from "@/components/LazyLoad/LazyLoad";
import Logo from "@/components/Logo/Logo";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMd from "@/components/NavbarMd/NavbarMd";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Menu, MessageCircle } from "lucide-react";
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
              <h1 data-aos="fade-down"
              className="text-[50px] md:text-[100px] lg:text-[150px] text-shadow-heavy font-julius text-gray-200">
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
        <LazyLoad>
        <section   id="Deportes" className="p-8 bg-blue-gradient">
          <h2 data-aos="fade-up" className="text-center py-4 text-3xl text-white">
            Deportes y juegos
          </h2>
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-blue-gradient gap-4 items-center">
            <div className="relative col-span-1 bg-red-500">
              <img src="crokis.jpeg" alt="" className="w-full h-[650px]" />
              <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute bottom-[60px] right-[190px]">
                Campo 1
              </div>
              <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-[210px] right-[170px]">
                Campo 3
              </div>
              <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-[350px] right-[170px]">
                Campo 2
              </div>
              <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-16 right-[170px]">
                campo 4
              </div>
            </div>
           <div className="mg:col-span:1 lg:col-span-2">
           <Deports />
           </div>
          </div>
        </section>
        </LazyLoad>
        <div className="h-auto bg-gray-600 flex items-center justify-center">
          <span data-aos="fade-up" className="text-white text-xl md:text-3xl text-center py-2">
            Visualiza tiempos disponibles este mes
          </span>
        </div>
        
        <section id="Disponibilidad">
          <LazyLoad>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={1} field="Campo 1" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          </LazyLoad>
          <LazyLoad>
          <div  className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={2} field="Campo 2" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          </LazyLoad>
          <LazyLoad>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={3} field="Campo 3" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          </LazyLoad>
          <LazyLoad>
          <div className="py-4 px-2 bg-blue-gradient flex gap-2 items-center">
            <Booking id={4} field="Campo 4" />
            <ImageDeport
              image="/assets/siluetavolley.png"
              title="Silueta voley"
            />
          </div>
          </LazyLoad>
        </section>
        <LazyLoad>
        <section
          id="DondeEstamos"
          className="h-svh bg-blue-gradient flex flex-col items-center py-14 gap-14"
        >
          <div data-aos="fade-up" className="h-auto bg-gray-600 w-full flex items-center justify-center">
            <span className="text-white text-center text-xl md:text-3xl">
              Nos puedes encontrar en...
            </span>
          </div>
          <div data-aos="fade-up" className="py-4 px-4  grid grid-cols-1 md:grid-cols-3 gap-2 items-center h-auto">
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
            <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d864.601923035708!2d-72.8793525!3d-13.6300254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d03211e390697%3A0xf70e6f08ff6afe89!2sCampo%20Deportivo%20Las%20Facchas%2C%20Abancay%2003001!5e1!3m2!1ses-419!2spe!4v1738687223850!5m2!1ses-419!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={undefined}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            </div>
          </div>
        </section>
        </LazyLoad>
        <footer className="h-auto bg-blue-gradient w-full pb-8">
            <div className="flex items-center justify-around text-white">
              <div>
                <span>Nuestras redes sociales</span>
                <div className="py-4 flex items-center justify-center gap-x-4">
                <Link href="https://www.facebook.com/profile.php?id=61571637322910" target="_blank">
                <Facebook />
                </Link>
                </div>
                <a href="https://wa.me/51929918682" target="_blank"  className="text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors py-2 px-4" rel="noopener noreferrer">Reserve por WhatsApp</a>
              </div>
              
              <div className="flex gap-y-4 items-start flex-col">
                <span>Mas información</span>
                <span>Reserve al numero: 987654321</span>
              </div>
            </div>
        </footer>
      </div>
    </div>
  );
}
