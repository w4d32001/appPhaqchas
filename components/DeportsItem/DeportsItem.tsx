import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeportsProps } from "./DeportsItem.types";
import { baseUrl } from "@/lib/utils";

export default function DeportsItem(props: DeportsProps) {
  const { image, description, name, price_evening, price_morning } = props;
  return (
    <Card className="bg-gray-900/90 border-none shadow-2xl">
      <CardContent className="py-4 text-gray-200 flex flex-col gap-y-2">
        <img
          src={`${baseUrl}/${image}`}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg mb-4 shadow-2xl"
        />
        <h3 className="text-xl font-bold font-nunito">{name}</h3>
        <div className="relative">
          <p className="text-justify font-nunito text-sm hover:text-md h-16 overflow-hidden hover:h-[140px] transition-all duration-500">
            {description}
          </p>
          <div className="flex flex-col gap-y-1">
            <span className="text-sm text-blue-800/90 font-nunito text-start">
              Precio mañana: <span className="text-red-800/90 font-bold">S/{price_morning}</span> (08:00 a 15:00 horas)
            </span>
            <span className="text-sm text-blue-800/90 font-nunito text-start">
              Precio tarde: <span className="text-red-800/90 font-bold">S/{price_evening}</span> (15:00 a 22:00 horas)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
