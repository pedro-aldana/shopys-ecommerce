


import { CarouselTextBanner } from '@/components/Shared/CarouselTextBanner/CarouselTextBanner'
import { Footer } from '@/components/Shared/Footer/Footer'
import { Navbar } from '@/components/Shared/Navbar/Navbar'
import React from 'react'

export default function LayoutRoutes({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main className='h-full'>
       <Navbar/>
       <CarouselTextBanner/>
       {children}
       <Footer/>
    </main>
  )
}