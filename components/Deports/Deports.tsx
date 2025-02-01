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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data?.map((item, index) => (
        <DeportsItem key={index} image={item.image} name={item.name} price_evening={item.price_evening} price_morning={item.price_morning} description={item.description} />
      ))}
    </div>
  );
}
