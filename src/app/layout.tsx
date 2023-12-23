import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/component/Navbar'
import './globals.css'
import Footer from '@/component/Footer'
import Hero from '@/component/Hero'
import Cards from '@/component/Cards'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Triscalla',
  description: 'wear you story',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
<Hero/>
<div className='my-8 p-8'>
<h1 className="text-4xl font-bold text-gray-800 mb-6 flex text-center justify-center animate-bounce">
      Our Products
    </h1>
  <div className='flex flex-wrap my-4 p-2'>
  <Cards/>
  <Cards/>
  <Cards/>

  <Cards/>
  </div>


</div>
        {children}
        <Footer/>
        </body>

    </html>
  )
}
