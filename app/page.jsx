"use client"
import { Inter } from '@next/font/google'

import Form from './components/Form'
import ReportTable from './components/ReportTable'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='dark:bg-[#0c3135] '>
   <Form />
   <ReportTable />
   </div>
  )
}
