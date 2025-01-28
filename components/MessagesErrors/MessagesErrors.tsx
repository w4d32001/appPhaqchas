import React from 'react'
import { MessagesErrorsProps } from './MessagesErrors.type'

export default function MessagesErrors(props: MessagesErrorsProps) {

    const { message } = props

  return (
    <span className="text-red-600 text-sm flex w-full items-center justify-center py-2">
        { message }
    </span>
  )
}
