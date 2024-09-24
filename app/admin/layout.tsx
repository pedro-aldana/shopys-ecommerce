import { Sidebar } from '@/components/Shared/Sidebar/Sidebar'
import React from 'react'

export default function LayoutAdmin({children}: Readonly<{children: React.ReactNode}>) {
    return (
      <main className='h-full'>
        <div className='flex justify-between lg:hidden px-6 py-3 items-center bg-violet-900'>
            <div className='py-1 text-white'>
           logo
            </div>
           sideabarMobile
        </div>
        <div className='flex h-full'>
          <div className='max-w-lg hidden lg:flex h-full w-72 flex-col fixed bg-violet-900 px-4 text-white'>
            <Sidebar/>
          </div>
          <div className='w-full lg:pl-72'>
            <div className='p-6'>{children}</div>
          </div>
        </div>
      </main>
    )
  }