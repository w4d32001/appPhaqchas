import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DeportsProps } from "./DeportsItem.types";

export default function DeportsItem(props: DeportsProps) {
  const { items } = props;
  const { img, description, title } = items;
  return (
    <Card className="bg-gray-100 border-none shadow-2xl">
      <CardContent className="py-4 text-gray-900 space-y-4">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-justify">{description}</p>
      </CardContent>
    </Card>
  );
}
