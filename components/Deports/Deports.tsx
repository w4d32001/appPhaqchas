import React from 'react'
import DeportsItem from '../DeportsItem/DeportsItem'
import { dataDeports } from './Deports.data'

export default function Deports() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            dataDeports.map((item, index) => (
                <DeportsItem key={index} items={item}/>
            ))
        }
    </div>
  )
}
