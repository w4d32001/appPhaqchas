import { apiUrl } from "@/lib/utils"

export type Field = {
    message: string;
    data: {
        name: string;
        description: string;
        image: string;
    }[];
    type: string;
}

export const fetchDataFields = async (): Promise<Field | undefined > => {
    try{
        const response = await fetch(`${apiUrl}/field`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) throw new Error('Error al obtener los datos')

        const data: Field = await response.json()

        return data

    }catch(error){
        console.log(error)
    }
}