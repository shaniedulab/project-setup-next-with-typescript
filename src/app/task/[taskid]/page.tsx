"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useParams } from 'next/navigation'


export default function Page() {
    const paramName = usePathname()
    const params = useParams<{taskid:string}>()
    console.log('params',params);
    

  return (
    <div>Task {params.taskid}</div>
  )
}
