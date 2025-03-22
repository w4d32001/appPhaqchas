import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeportsProps } from "./DeportsItem.types";
import { baseUrl } from "@/lib/utils";
import Image from "next/image";

export default function DeportsItem(props: DeportsProps) {
  const { image, description, name, price_evening, price_morning } = props;
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
    <Card className="border w-full shadow-2xl p-0">
      <CardContent className="text-black w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-2">
        <div className=" flex flex-col justify-between h-[300px] py-4 md:py-0  px-8 w-1/2">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-brown-600 capitalize text-3xl">
              {name}
            </h2>
            <p className="text-justify font-nunito text-lg">
              {capitalizeFirstLetter(description)}
            </p>
          </div>
          <div className="flex gap-y-1 items-center justify-around bg-gray-200 p-2 rounded-xl text-gray-900/90 font-bold">
            <span className="">
              Mañana <br />
              S/{price_morning}
            </span>
            <span className="text-3xl">|</span>
            <span className="">
              Tarde <br />
              S/{price_evening}
            </span>
          </div>
        </div>
        <div className="rounded-xl">
          <Image
            src={`${baseUrl}/${image}`}
            alt={name}
            width={500}
            height={500}
            className="w-full h-[350px] object-cover rounded-b-xl md:rounded-b-none md:rounded-r-xl shadow-2xl"
          />
        </div>
      </CardContent>
    </Card>
  );
}
