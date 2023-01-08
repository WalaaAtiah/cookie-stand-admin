"use client"
import { Inter } from '@next/font/google'
import Form from './components/Form'
import ReportTable from './components/ReportTable'
import LoginForm from './components/LoginForm'
import { AuthContext } from './Context/Auth'
import { useState,useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens}=useContext(AuthContext);
  return (
    
   <div className='dark:bg-[#0c3135] '>
    {tokens?
    <>
    <Form />
   <ReportTable />
    </>:<LoginForm/>}
   </div>
  )
}
