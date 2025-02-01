"use client";
import React, { useEffect, useState } from "react";
import { DataItem, TableProps } from "./TableType";
import { apiUrl } from "@/lib/utils";
import Loader from "@/components/Loader/Loader";
import { format, addDays, startOfWeek, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export default function Table(props: TableProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { start, end, id, field } = props;

  // Asegurar que start sea una fecha válida y comience el domingo
  const startDate = startOfWeek(parseISO(start), { weekStartsOn: 0 });
  const weekDates = Array.from({ length: 7 }, (_, index) =>
    format(addDays(startDate, index), "dd/MM", { locale: es })
  );

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/bookingsForLandingPage/${id}/${start}/${end}`);
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
      "disponible": "bg-blue-800/20",
      "reservado": "bg-green-600",
      "en espera": "bg-yellow-500",
      "completado": "bg-red-600",
    };
    return colors[value] || "bg-gray-600";
  }

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <table className="w-full text-white border-collapse border border-gray-600">
      <thead>
        <tr>
          <th></th>
          <th className="border px-4 py-2 bg-blue-600">Hora</th>
          {weekDates.map((date, index) => (
            <th key={index} className="border px-4 py-2 bg-blue-500">
              {['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][index]}<br />{date}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {index === 0 && (
              <td rowSpan={data.length} className="rotate-90 border">
                <div className="w-20">{field}</div>
              </td>
            )}
            <td className="border px-4 py-2 text-xs">{item.hour}</td>
            {Object.keys(item)
              .filter((key) => key !== "hour")
              .map((day, idx) => (
                <td
                  key={idx}
                  className={`border px-4 py-2 text-xs text-center capitalize ${getColorClass(item[day as keyof DataItem] as string)}`}
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
