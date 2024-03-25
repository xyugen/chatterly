import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='text-gray-100 m-8 grid grid-flow-row sm:grid-flow-col sm:m-16'>
      <div className='flex flex-col justify-center h-66 gap-6 text-center sm:text-left'>
        <h1 className='font-bold text-3xl sm:text-5xl'>Welcome to <span className='text-blue-500'>Chatterly</span>.</h1>
        <p className='text-gray-300 text-md'>A free and open-source chat application for the web.</p>
        
        <div>
          <Button asChild variant={'outline'}>
            <Link href='/signup' className='text-gray-100'>Get Started</Link>
          </Button>
        </div>
      </div>

      <div>
        <img src='/chatterly.png' alt='Chatterly Logo' className='h-64' />
      </div>
    </main>
  )
}

export default page