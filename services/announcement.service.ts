import { apiUrl } from "@/lib/utils";

export type Announcement = {
  message: string;
  data: {
    title: string;
    description: string;
    image: string;
    status: string;
  }[];
  type: string;
};

export const fetchDataAnnouncements = async (): Promise<Announcement | undefined> => {
    try{
        const response = await fetch(`${apiUrl}/announcement`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        if( !response.ok ) throw new Error('Error al obtener los datos')
    
        const data: Announcement = await response.json()
    
        return data
    }catch(error){
        console.log(error)
    }

}