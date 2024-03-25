import React from 'react'
import '@/app/globals.css'
import { Poppins as FontPoppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const fontPoppins = FontPoppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})

const layout = (
    { children }: { children: React.ReactNode }
) => {
  return (
    <html lang='en'>
        <body
            className={cn(
                'bg-slate-900 font-poppins antialiased',
                fontPoppins.variable
                )}
            >
            <header className='my-7 mx-16 flex justify-between'>
                <Link href='/' className='text-gray-200 text-3xl font-bold'>Chatterly</Link>
                <div>
                    <Link className={buttonVariants({ variant: 'link' })} href='/login'>Login</Link>
                    <Link className={buttonVariants({ variant: 'outline' })} href='/signup'>Sign Up</Link>
                </div>
            </header>
            {children}
        </body>
    </html>
  )
}

export default layout