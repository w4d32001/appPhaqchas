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
    start: any,
    end: any,
    id: any,
    field: string
}