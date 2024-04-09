import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className='flex justify-between py-2 px-4 mx-auto mb-10 w-full sm:py-7 sm:w-4/5'>
          <Link href='/' className='bg-gradient-to-br from-blue-300 to-blue-500 text-transparent bg-clip-text text-3xl font-bold'>Chatterly</Link>
          <div className='hidden sm:block sm:visible'>
              <Link className={buttonVariants({ variant: 'link' })} href='/login'>Login</Link>
              <Link className={buttonVariants({ variant: 'outline' })} href='/signup'>Sign Up</Link>
          </div>
      </header>
      {children}
    </>
  )
}

export default layout