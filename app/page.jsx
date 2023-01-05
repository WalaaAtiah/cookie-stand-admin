"use client"
import { Inter } from '@next/font/google'

import Form from './components/Form'
import ReportTable from './components/ReportTable'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Form />
   <ReportTable />
   </>
  )
}
