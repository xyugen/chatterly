import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <main className='text-gray-100 px-6 md:px-0 mx-auto w-full sm:w-[500px] space-y-12'>
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl bg-gradient-to-br font-bold p-1 from-blue-300 to-blue-500 text-transparent bg-clip-text text-center tracking-wide'>Login</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4 mb-3'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='username'>Username</Label>
                    <Input id='username' type='text' placeholder='Username' required></Input>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' type='password' placeholder='Password' required></Input>
                </div>
            </CardContent>
            <CardFooter className='flex flex-col gap-3'>
                <Button variant={ 'outline' } className='w-full'>Login</Button>
                <p>Don&lsquo;t have an account? <Link href='/signup' className='text-blue-300 hover:underline underline-offset-2'>Sign Up</Link></p>
                {/* <div className='border-t border-slate-700 w-full mt-5 bg-slate-400'></div> */}
            </CardFooter>
        </Card>
    </main>
  )
}

export default LoginForm