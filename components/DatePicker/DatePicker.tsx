import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerProps } from "./DatePicker.type";
import { es } from "date-fns/locale";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DatePicker(props: DatePickerProps) {
  const { onChange, value } = props;
  const [month, setMonth] = useState(value || new Date());

  // Rango de años
  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - 15 + i);
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] justify-start text-gray-900 text-left font-normal",
            !value && "text-muted-foreground text-gray-900"
          )}
        >
          <CalendarIcon className="mr-2 h-5 w-5" />
          {value ? format(value, "PPP", { locale: es }) : <span>Elige una fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex items-center justify-between p-2 border-b bg-gray-100">
          {/* Selector de Mes */}
          <Select onValueChange={(val) => setMonth(new Date(month.getFullYear(), parseInt(val)))}>
            <SelectTrigger className="w-[120px] text-sm">
              <SelectValue placeholder={months[month.getMonth()]} />
            </SelectTrigger>
            <SelectContent>
              {months.map((m, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Selector de Año */}
          <Select onValueChange={(val) => setMonth(new Date(parseInt(val), month.getMonth()))}>
            <SelectTrigger className="w-[80px] text-sm">
              <SelectValue placeholder={month.getFullYear()} />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Calendario */}
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          month={month}
          onMonthChange={setMonth}
        />
      </PopoverContent>
    </Popover>
  );
}
