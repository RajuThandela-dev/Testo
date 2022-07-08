import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  let location=useLocation();
  console.log(location)
  return (
    <div>Home</div>
  )
}
