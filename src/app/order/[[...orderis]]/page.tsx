"use client"
import { useParams } from 'next/navigation';
import React from 'react'

export default function Page() {
  const params = useParams<{orderis?:string[]}>()
  console.log('params', params);
  
  return (
    <div>Optional Catch-all Segments {params.orderis ? params.orderis[0] : 'id not found'}</div>
  )
}
