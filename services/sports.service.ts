import { apiUrl } from "@/lib/utils"

export type Sport = {
    message: string;
    data: {
        name: string;
        description: string;
        price_morning: string;
        price_evening: string;
        image: string;
    }[];
    type: string;
}

export const fetchDataSports = async (): Promise<Sport | undefined > => {
    try{
        const response = await fetch(`${apiUrl}/sport`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) throw new Error('Error al obtener los datos')

        const data: Sport = await response.json()

        return data

    }catch(error){
        console.log(error)
    }
}