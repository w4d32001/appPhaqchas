"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import { AnnouncementModalProps } from "./AnnouncementModal.type";
import { baseUrl } from "@/lib/utils";

export default function AnnouncementModal(props: AnnouncementModalProps) {
  const { image, title, description } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) return null;

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div className="fixed inset-0 flex py-4 lg:py-0 md:items-center justify-center md:justify-end bg-black bg-opacity-20 z-50 md:pr-8">
      <div
        data-aos="fade-down"
        className="bg-orange-600/95 max-w-[500px] max-h-[900px]  md:max-w-[500px] md:max-h-[1100px] relative rounded-lg shadow-lg"
      >
        <div className="absolute -top-4 -right-4 text-3xl bg-red-900/90 p-1 rounded-full text-white cursor-pointer hover:bg-blue-950 transition-all">
          <X size={30} strokeWidth={3} className="" onClick={handleClose} />
        </div>
        <div className="p-2 ">
          <img
            src={`${baseUrl}/${image}`}
            alt=""
            className="lg:w-[500px] h-[500px] lg:h-[500px] object-cover"
          />
        </div>
        <div className="max-w-full p-4  text-white flex flex-wrap gap-y-2">
          <h2 className="text-center text-xl w-full break-words">{capitalizeFirstLetter(title)}</h2>
          <p className="text-justify text-mg font-nunito break-words w-full">
            {capitalizeFirstLetter(description)}
          </p>
        </div>
      </div>
    </div>
  );
}
