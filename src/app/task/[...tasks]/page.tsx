"use client"
import { useParams } from 'next/navigation';
import React from 'react'

export default function Page() {
    const params = useParams<{tasks:string[]}>()
    console.log('params',params);
  return (
    <div>Catch-all Segments {params.tasks[0]}</div>
  )
}
