"use client"
import PaymentPage from "@/components/PaymentPage"
import React from 'react'
import { useSession } from "next-auth/react"

const username = () => {
  const {data : session} = useSession()
  return (
    <div>
      <PaymentPage params={session}/>
    </div>
  )
}

export default username
