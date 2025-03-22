'use client'
import React from "react";
import DeportsItem from "../DeportsItem/DeportsItem";
import { useSport } from "@/hooks/useSport";
import Loader from "../Loader/Loader";

export default function Deports() {
  const { data, loading, error } = useSport();
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col w-full gap-4 p-8">
      {data?.map((item, index) => (
        <DeportsItem key={index} image={item.image} name={item.name} price_evening={item.price_evening} price_morning={item.price_morning} description={item.description} />
      ))}
    </div>
  );
}
