import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { DatePickerProps } from './DatePicker.type';
import { es } from 'date-fns/locale';

export default function DatePicker(props: DatePickerProps) {
    const { onChange, value } = props
 
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-gray-900 text-left font-normal",
              !value && "text-muted-foreground text-gray-900"
            )}
          >
            <CalendarIcon />
            {value ? format(value, "PPP", { locale: es }) : <span>Elige una fecha</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
}
