"use client";
import React, { useState } from "react";
import Table from "@/components/Table/Table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { format, addWeeks, subWeeks } from "date-fns";
import { es } from "date-fns/locale";
import { BookingProps } from "./Booking.type";

export default function Booking(props: BookingProps) {
  const { id, field } = props;

  const today = new Date();
  const [currentWeekStart, setCurrentWeekStart] = useState(today);
  const [firstWeekStart] = useState(today);

  const getWeekRange = (weekStart: Date) => ({
    start: weekStart, // Día actual
    end: addWeeks(weekStart, 1), // Siete días después
  });

  const weekRange = getWeekRange(currentWeekStart);

  const goToNextWeek = () => {
    setCurrentWeekStart((prev) => addWeeks(prev, 1));
  };

  const goToPreviousWeek = () => {
    setCurrentWeekStart((prev) => subWeeks(prev, 1));
  };

  return (
    <div className="w-full p-2">
      <div
        data-aos="fade-up"
        className="flex justify-around mb-4 items-center w-full"
      >
        {currentWeekStart > firstWeekStart && (
          <button
            onClick={goToPreviousWeek}
            className="text-white rounded-xl bg-green-700 hover:bg-green-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between gap-x-4"
          >
            <ArrowLeft strokeWidth={2} />
            <span className="hidden md:block">Anterior</span>
          </button>
        )}
        <h1 className="text-orange-900 font-bold">
          {format(weekRange.start, "dd MMMM yyyy", { locale: es })} a{" "}
          {format(weekRange.end, "dd MMMM yyyy", { locale: es })}
        </h1>
        <button
          onClick={goToNextWeek}
          className="text-white rounded-xl bg-green-700 hover:bg-green-900/90 py-2 transition-colors px-4 text-xl flex items-center justify-between gap-x-4"
        >
          <span className="hidden md:block">Siguiente</span>{" "}
          <ArrowRight strokeWidth={2} />
        </button>
      </div>
      <div data-aos="fade-up" className="min-w-full overflow-x-auto">
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
