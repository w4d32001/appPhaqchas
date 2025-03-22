import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAnnouncement } from "@/hooks/useAnnouncement";
import Loader from "@/components/Loader/Loader";
import { baseUrl } from "@/lib/utils";
import Image from "next/image";

export default function CarouselAnnouncement() {
  const { data, loading, error } = useAnnouncement();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <Carousel className="p-2 rounded-xl">
      <CarouselContent className="flex ">
        {data &&
          data.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 transition-all rounded-xl duration-300 ease-in-out 
              mx-1 sm:mx-3 basis-[85%] sm:basis-[75%] md:basis-[55%] lg:basis-[40%] xl:basis-[35%] 2xl:basis-[25%]
              scale-100 sm:scale-90 opacity-100  hover:scale-100 sm:hover:scale-100"
            >
              <div className="bg-white w-full sm:w-[500px] h-[750px] flex flex-col gap-y-2 rounded-xl border shadow-2xl">
                <div className="">
                <Image
                src={`${baseUrl}/${item.image}`}
                alt={item.title || "Announcement"}
                width={500}
                height={900}
                priority
                className="w-auto h-[550px] object-cover rounded-t-xl"
                />
                </div>
                <div className="p-4 text-black font-nunito text-center overflow-y-auto">
                  <h2 className="text-lg text-brown-600 sm:text-2xl font-bold break-words">
                    {capitalizeFirstLetter(item.title)}
                  </h2>
                  <p className="text-sm sm:text-base font-nunito break-words text-justify">
                    {capitalizeFirstLetter(item.description)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
