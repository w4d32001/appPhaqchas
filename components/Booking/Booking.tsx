"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table/Table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { startOfWeek, endOfWeek, format, addWeeks, subWeeks } from "date-fns";
import { es } from "date-fns/locale";
import { BookingProps } from "./Booking.type";

export default function Booking(props: BookingProps) {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const { id, field } = props;

  const getWeekRange = (weekStart: any) => {
    const startOfThisWeek = startOfWeek(weekStart, { weekStartsOn: 1 });
    const endOfThisWeek = endOfWeek(weekStart, { weekStartsOn: 1 });

    return {
      start: format(startOfThisWeek, "yyyy-MM-dd"),
      end: format(endOfThisWeek, "yyyy-MM-dd"),
    };
  };

  const [weekRange, setWeekRange] = useState(getWeekRange(currentWeekStart));

  useEffect(() => {
    setWeekRange(getWeekRange(currentWeekStart));
  }, [currentWeekStart]);

  const goToNextWeek = () => {
    setCurrentWeekStart(addWeeks(currentWeekStart, 1));
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart(subWeeks(currentWeekStart, 1));
  };
  return (
    <div className="w-full md:w-5/6">
      <div className="flex justify-around mb-4 items-center w-full">
        <button
          onClick={goToPreviousWeek}
          className="text-white rounded-xl bg-blue-700 hover:bg-blue-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between"
        >
          <ArrowLeft strokeWidth={2} />
          Semana anterior
        </button>
        <h1 className="text-white">
          {format(new Date(weekRange.start), "dd MMMM yyyy", { locale: es })} a{" "}
          {format(new Date(weekRange.end), "dd MMMM yyyy", { locale: es })}
        </h1>
        <button
          onClick={goToNextWeek}
          className="text-white rounded-xl bg-blue-700 hover:bg-blue-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between"
        >
          Siguiente semana <ArrowRight strokeWidth={2} />
        </button>
      </div>
      <div className="min-w-full overflow-x-auto">
        <Table end={weekRange.end} start={weekRange.start} id={id} field={field}/>
      </div>
    </div>
  );
}
