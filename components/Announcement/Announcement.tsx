'use client'
import React from 'react'
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal'
import { useAnnouncement } from '@/hooks/useAnnouncement';
import Loader from '../Loader/Loader';

export default function Announcement() {
  
   const { data, loading, error } = useAnnouncement();
    if (loading) {
      return <Loader />;
    }
    console.log(data)
  
    if (error) {
      return <div>{error}</div>;
    }

  return (
    <div>
        {
          data?.map((item) => (
            <AnnouncementModal key={item.title} title={item.title} description={item.description} image={item.image} />
          ))
        }
    </div>
  )
}
