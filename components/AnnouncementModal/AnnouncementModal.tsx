'use client'
import { X } from "lucide-react";
import React, { useState } from "react";
import { AnnouncementModalProps } from "./AnnouncementModal.type";
import { baseUrl } from "@/lib/utils";

export default function AnnouncementModal(props: AnnouncementModalProps) {
  const { image, title, description } = props
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex py-4 lg:py-0 md:items-center justify-center bg-black bg-opacity-70 z-50">
      <div data-aos="fade-down" className="bg-blue-950/95 max-w-[350px] max-h-[900px]  md:max-w-[500px] md:max-h-[1100px] relative rounded-lg shadow-lg">
          <div className="absolute -top-4 -right-4 text-3xl bg-blue-900/90 p-1 rounded-full text-white cursor-pointer hover:bg-blue-950 transition-all">
          <X size={30} strokeWidth={3} className="" onClick={handleClose}/>
          </div>
          <div className="p-2 ">
            <img src={`${baseUrl}/${image}`} alt="" className="lg:w-[500px] h-[500px] lg:h-[500px] object-cover" />
          </div>
          <div className="w-full p-4 text-white flex flex-col gap-y-2">
            <h2 className="text-center text-xl">{title}</h2>
            <p className="text-justify text-mg font-nunito">{description}</p>
          </div>
      </div>
    </div>
  );
}
