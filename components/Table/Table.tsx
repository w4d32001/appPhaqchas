"use client";
import React, { useEffect, useState } from "react";
import { DataItem, TableProps } from "./TableType";

export default function Table( props: TableProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { start, end, id, field } = props;

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/test/${id}/${start}/${end}`);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, [start, end, id]);
  function getColorClass(value: string) {
    switch (value) {
      case "Disponible":
        return "bg-blue-800";
      case "Reservado":
        return "bg-red-800";
      default:
        return "bg-gray-800"; 
    }
  }

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table className="w-full text-white">
      <thead>
        <tr>
          <th className=""></th>
          <th className="border px-4 py-2 bg-blue-600">Hora</th>
          <th className="border px-4 py-2 bg-blue-500">Lunes</th>
          <th className="border px-4 py-2 bg-blue-500">Martes</th>
          <th className="border px-4 py-2 bg-blue-500">Miércoles</th>
          <th className="border px-4 py-2 bg-blue-500">Jueves</th>
          <th className="border px-4 py-2 bg-blue-500">Viernes</th>
          <th className="border px-4 py-2 bg-blue-500">Sábado</th>
          <th className="border px-4 py-2 bg-blue-500">Domingo</th>
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
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Lunes)}`}>{item.Lunes}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Martes)}`}>{item.Martes}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Miercoles)}`}>{item.Miercoles}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Jueves)}`}>{item.Jueves}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Viernes)}`}>{item.Viernes}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Sabado)}`}>{item.Sabado}</td>
            <td className={`border px-4 py-2 text-xs ${getColorClass(item.Domingo)}`}>{item.Domingo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
