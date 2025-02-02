"use client";
import React, { useState } from "react";
import Table from "@/components/Table/Table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { startOfWeek, endOfWeek, format, addWeeks, subWeeks } from "date-fns";
import { es } from "date-fns/locale";
import { BookingProps } from "./Booking.type";

export default function Booking(props: BookingProps) {
  const { id, field } = props;

  const [currentWeekStart, setCurrentWeekStart] = useState(() => 
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );

  const getWeekRange = (weekStart: Date) => ({
    start: startOfWeek(weekStart, { weekStartsOn: 0 }),
    end: endOfWeek(weekStart, { weekStartsOn: 0 }),
  });

  const weekRange = getWeekRange(currentWeekStart);

  const goToNextWeek = () => {
    setCurrentWeekStart((prev) => addWeeks(prev, 1));
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prev) => subWeeks(prev, 1));
  };

  return (
    <div className="w-full md:w-5/6">
      <div className="flex justify-around mb-4 items-center w-full">
        <button
          onClick={goToPreviousWeek}
          className="text-white rounded-xl bg-blue-700 hover:bg-blue-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between"
        >
          <ArrowLeft strokeWidth={2} />
          <span className="hidden md:block">Semana anterior</span>
        </button>
        <h1 className="text-white">
          {format(weekRange.start, "dd MMMM yyyy", { locale: es })} a{" "}
          {format(weekRange.end, "dd MMMM yyyy", { locale: es })}
        </h1>
        <button
          onClick={goToNextWeek}
          className="text-white rounded-xl bg-blue-700 hover:bg-blue-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between"
        >
          <span className="hidden md:block">Siguiente semana</span> <ArrowRight strokeWidth={2} />
        </button>
      </div>
      <div className="min-w-full overflow-x-auto">
        <Table
          end={format(weekRange.end, "yyyy-MM-dd")}
          start={format(weekRange.start, "yyyy-MM-dd")}
          id={id}
          field={field}
        />
      </div>
    </div>
  );
}
