'use client'
import React, { useEffect } from 'react'
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal'
import { useAnnouncement } from '@/hooks/useAnnouncement';
import Loader from '../Loader/Loader';
interface AnnouncementProps {
  onEmpty?: (isEmpty: boolean) => void;
}
export default function Announcement({onEmpty}: AnnouncementProps) {
  
   const { data, loading, error } = useAnnouncement();
   
    if (loading) {
      return <Loader />;
    }
     
    if (error) {
      return <div>{error}</div>;
    }

  return (
    <div>
        {
          data && (
            data?.map((item) => (
              <AnnouncementModal key={item.title} title={item.title} description={item.description} image={item.image} />
            ))
          )
        }
    </div>
  )
}
