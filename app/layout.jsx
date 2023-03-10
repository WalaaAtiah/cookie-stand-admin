"use client"
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ThemeWrapper from './Context/theme'
import LoginForm from './components/LoginForm'
import { AuthWrapper } from './Context/Auth'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeWrapper>
        <AuthWrapper>

      <body className='dark:bg-[#0c3135] 	 '>
        <Header />
        <main className='dark:bg-[#0c3135]'>
          {children}
        </main>
        <Footer />
      </body>
        </AuthWrapper>
  
      </ThemeWrapper>
    </html>
  )
}