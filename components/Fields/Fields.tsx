import { useField } from '@/hooks/useField';
import React from 'react'
import Loader from '../Loader/Loader';
import FieldsItem from '../FieldsItem/FieldsItem';

export default function Fields() {
   const { data, loading, error } = useField();
    if (loading) {
      return <Loader />;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <div className="flex flex-col w-full gap-4 p-8">
        {data?.map((item, index) => (
          <FieldsItem key={index} image={item.image} name={item.name} description={item.description} />
        ))}
      </div>
    );
}
