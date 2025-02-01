import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeportsProps } from "./DeportsItem.types";
import { baseUrl } from "@/lib/utils";

export default function DeportsItem(props: DeportsProps) {
  const { image, description, name, price_evening, price_morning } = props;
  return (
    <Card className="bg-gray-900/90 border-none w-full shadow-2xl p-0">
      <CardContent className="text-gray-200 w-full flex flex-col gap-y-2">
        <div className="relative">
          <img
            src={`${baseUrl}/${image}`}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg mb-1 shadow-2xl"
          />
          <div className="text-xl font-bold font-nunito absolute top-0 right-0 bg-gray-900 shadow-2xl rounded-r-lg">
            <span className="text-white py-2 px-4 text-3xl">{name}</span>
          </div>
        </div>
        <div className="relative p-2">
          <p className="text-justify font-nunito text-sm hover:text-md h-16 overflow-hidden hover:h-[140px] transition-all duration-500">
            {description}
          </p>
          <div className="flex gap-y-1 items-center justify-around bg-gray-200 p-2 rounded-xl text-gray-900/90 font-bold">
              <span className="">
                Mañana  <br />S/{price_morning}
              </span>
              <span className="text-3xl">|</span>
              <span className="">
              Tarde <br />
                S/{price_evening}
              </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
