import React from 'react'
import '@/app/globals.css'
import { Poppins as FontPoppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { FIREBASE_API_KEY } from '@/lib/constants'

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
                'text-gray-100 bg-slate-900 min-h-screen font-poppins antialiased',
                fontPoppins.variable
                )}
            >
            {children}
        </body>
    </html>
  )
}

export default layout