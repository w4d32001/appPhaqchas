import { fetchDataFields, Field } from "@/services/fields.service";
import { useEffect, useState } from "react";

export const useField = () => {
    const [data, setData] = useState<Field["data"] | undefined>(undefined);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchDataFields();
            if(response){
                setData(response.data);
            }
            setLoading(false);
          } catch (error) {
            setError("Error al obtener los datos");
            setLoading(false);
          }
        };
        fetchData();
      }, []);
    
      return {
        data,
        loading,
        error,
      };
}