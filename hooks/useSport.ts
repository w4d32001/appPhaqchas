import { fetchDataSports, Sport } from "@/services/sports.service";
import { useEffect, useState } from "react";

export const useSport = () => {
  const [data, setData] = useState<Sport["data"] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataSports();
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
};
