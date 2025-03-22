import React from "react";
import { FieldProps } from "./FieldsItem.types";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { baseUrl } from "@/lib/utils";

export default function FieldsItem({ name, description, image }: FieldProps) {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
    <Card className="border w-full shadow-2xl p-0">
      <CardContent className="text-black w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-2">
        <div className="rounded-xl">
          <Image
            src={`${baseUrl}/${image}`}
            alt={name}
            width={500}
            height={500}
            className="w-full h-[350px] object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl shadow-2xl"
          />
        </div>
        <div className=" flex flex-col justify-between h-[300px] py-4 md:py-0  px-8 w-1/2">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-brown-600 capitalize text-3xl">
              {name}
            </h2>
            <p className="text-justify font-nunito text-lg">
              {capitalizeFirstLetter(description)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
