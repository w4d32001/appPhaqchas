import Booking from "@/components/Booking/Booking";
import LazyLoad from "@/components/LazyLoad/LazyLoad";
import React from "react";

export default function page() {
  return (
    <div className="py-[64px] bg-brown-200/60 min-h-screen">
      <div className="h-auto flex items-center justify-center ">
        <span
          data-aos="fade-up"
          className="text-black text-xl md:text-3xl text-center py-4 font-bold font-nunito" 
        >
          Visualiza tiempos disponibles este mes
        </span>
      </div>

      <div id="" className=" flex flex-col gap-y-4">
        <LazyLoad>
          <div className="  flex gap-2 items-center">
            <Booking id={1} field="Campo 1" />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div className=" flex gap-2 items-center">
            <Booking id={2} field="Campo 2" />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div className="flex gap-2 items-center">
            <Booking id={3} field="Campo 3" />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div className=" flex gap-2 items-center">
            <Booking id={4} field="Campo 4" />
          </div>
        </LazyLoad>
      </div>
    </div>
  );
}
