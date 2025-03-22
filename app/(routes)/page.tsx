'use client'
import CarouselAnnouncement from "@/components/CarouselAnnouncement/CarouselAnnouncement";
import Deports from "@/components/Deports/Deports";
import Fields from "@/components/Fields/Fields";
import { Facebook, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-svh relative bg-brown-100/60 mt-[64px] pt-4 md:pt-0 md:mt-0">
      <div className="relative  z-10">
        <section
          id="Inicio"
          className="h-[calc(100svh-80px)]  lg:h-svh relative flex items-center"
        >
          <div className="grid md:grid-cols-2 items-center gap-4 h-full w-full mx-auto px-4 mb-96 md:mb-0">
            <div className="flex flex-col justify-center gap-y-16  items-center font-semibold rounded-full p-4 md:p-16 text-white">
              <div className="flex flex-col gap-y-4">
                <h1
                  data-aos="fade-down"
                  className="text-5xl text-black font-bold text-start text-shadow-neutro font-nunito p-0"
                >
                  Phaqchas
                </h1>
                <p
                  data-aos="fade-down"
                  className="font-nunito text-gray-700 text-md md:text-xl md:max-w-2xl text-justify "
                >
                  El lugar ideal para los amantes del deporte.
                  Contamos con canchas modernas y equipadas para voleibol, futsal
                  y otras disciplinas, ofreciendo un espacio perfecto para
                  entrenar, competir y disfrutar. Únete a nuestra comunidad
                  deportiva y vive la pasión del deporte en Phaqchas.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <Link href="reservations" className="bg-green-600 hover:bg-green-700 transition-all border shadow-3xl text-xl px-4 md:px-8 py-2 font-nunito text-white rounded-lg">
                  Ver reservas
                </Link>
                <Link href="#Anuncio" className="text-brown-600 hover:text-brown-700 transition-all cursor-pointer hover:textlg underline">Visualize todos nuetros anuncios y comunicados</Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/assets/voley.svg" alt="" width={500} height={500} className="shadown-xl mix-blend-multiply"/>
            </div>
          </div>
        </section>
        <section id="Anuncio" className="pt-4 mt-32 mb:mt-10">
          <h3
            data-aos="fade-up"
            className="text-brown-800 text-2xl font-bold md:text-3xl text-center py-2"
          >
            Anuncios y comunicados
          </h3>
            <CarouselAnnouncement />
        </section>
        <section id="Deportes" className="pt-4">
          <h3
            data-aos="fade-up"
            className="text-brown-800 text-2xl font-bold md:text-3xl text-center py-2"
          >
            Deportes en nuestro local
          </h3>
            <Deports />
        </section>
        <section id="Campos" className="pt-4">
          <h3
            data-aos="fade-up"
            className="text-brown-800 text-2xl font-bold md:text-3xl text-center py-2"
          >
            Todos nuestros campos y otros
          </h3>
            <Fields />
        </section>
      
        <div className="h-auto w-full flex items-center justify-center mt-4">
        <h3
            data-aos="fade-up"
            className="text-brown-800 text-2xl font-bold md:text-3xl text-center py-2"
          >
            Nos puedes encontrar en...
          </h3>
        </div>
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
        <footer className="bg-blue-950 w-full py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-center md:text-left md:px-16">
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
