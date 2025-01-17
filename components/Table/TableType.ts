export interface DataItem {
    hour: string;
    Lunes: string;
    Martes: string;
    Miercoles: string;
    Jueves: string;
    Viernes: string;
    Sabado: string;
    Domingo: string;
  }

export type TableProps = {
    start: string,
    end: string,
    id: number,
    field: string
}