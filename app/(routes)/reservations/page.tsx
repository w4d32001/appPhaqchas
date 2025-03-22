import Booking from "@/components/Booking/Booking";
import LazyLoad from "@/components/LazyLoad/LazyLoad";
import React from "react";

export default function page() {
  return (
    <div className="mt-[64px]">
      <div className="h-auto flex items-center justify-center">
        <span
          data-aos="fade-up"
          className="text-white text-xl md:text-3xl text-center py-2"
        >
          Visualiza tiempos disponibles este mes
        </span>
      </div>

      <section id="" className="bg-white">
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
    </div>
  );
}
