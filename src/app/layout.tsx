import React from 'react'
import '@/app/globals.css'
import { Poppins as FontPoppins } from 'next/font/google'

import { cn } from '@/lib/utils'

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
                'bg-slate-900 min-h-screen font-poppins antialiased',
                fontPoppins.variable
                )}
            >
            <header className='my-7 mx-16 flex justify-between'>
                <h1 className='text-gray-200 text-3xl font-bold'>Chatterly</h1>
                <div>
                    <button>Login</button>
                </div>
            </header>
            {children}
        </body>
    </html>
  )
}

export default layout