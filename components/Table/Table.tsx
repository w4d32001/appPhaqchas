"use client";
import React, { useEffect, useState } from "react";
import { DataItem, TableProps } from "./TableType";
import { apiUrl } from "@/lib/utils";
import Loader from "@/components/Loader/Loader";
import { format, addDays, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export default function Table(props: TableProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { start, end, id, field } = props;

  const startDate = parseISO(start);

  const weekDates = Array.from({ length: 7 }, (_, index) =>
    format(addDays(startDate, index), "dd/MM", { locale: es })
  );

  const weekDays =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== "hour") : [];

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${apiUrl}/bookingsForLandingPage/${id}/${start}/${end}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, [start, end, id]);


  function getColorClass(value: string) {
    const colors: Record<string, string> = {
      disponible: "bg-white text-green-700 font-bold",
      reservado: "bg-[#39AA29]",
      "en espera": "bg-yellow-500",
      completado: "bg-red-600",
    };
    return colors[value] || "bg-gray-600";
  }

  console.log(data);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <table className="w-full text-white border-collapse">
      <thead>
        <tr>
          <th></th>
          <th className="border px-4 py-2 bg-orange-600">Hora</th>
          {weekDays.map((day, index) => (
            <th key={index} className="border px-4 py-2 bg-orange-500">
              {day}
              <br />
              {weekDates[index]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {index === 0 && (
              <td rowSpan={data.length} className="border bg-orange-700 w-20">
                <div className="w-20 h-full rotate-90 text-gray-100 flex items-center justify-center">
                  {field}
                </div>
              </td>
            )}
            <td className="border px-4 py-2 text-xs bg-orange-500 text-center">
              {item.hour}
            </td>
            {Object.keys(item)
              .filter((key) => key !== "hour")
              .map((day, idx) => (
                <td
                  key={idx}
                  className={`border px-4 py-2 text-xs text-center capitalize ${getColorClass(
                    item[day as keyof DataItem] as string
                  )}`}
                >
                  {item[day as keyof DataItem]}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
