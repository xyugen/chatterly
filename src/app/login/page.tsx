"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginForm = () => {
    const formSchema = z.object({
        username: z
            .string({
                required_error: 'Username is required',
            })
            .min(2, 'Username must be at least 2 characters')
            .max(50, 'Username must be less than 50 characters')
            .regex(/^[a-zA-Z0-9_]+$/, 'Username must contain only letters, numbers, or underscores'),
        password: z
            .string({
                required_error: 'Password is required',
            })
            .min(8, 'Password must be at least 8 characters')
            .max(100, 'Password must be less than 100 characters')
    })

    const defaultValues = {
        username: '',
        password: ''
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    return (
      
    <main className='text-gray-100 px-6 md:px-0 mx-auto w-full sm:w-[500px] space-y-12'>
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl bg-gradient-to-br font-bold p-1 from-blue-300 to-blue-500 text-transparent bg-clip-text text-center tracking-wide'>
                    Login
                </CardTitle>
            </CardHeader>
            <Form {...form}>
                <CardContent className='flex flex-col gap-4 mb-3'>
                    <form onSubmit={form.handleSubmit((data) => console.log(data))} className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1'>
                                    <FormLabel htmlFor='username'>Username</FormLabel>
                                    <FormControl>
                                        <Input id='username' type='text' placeholder='Username' required {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1'>
                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                    <FormControl>
                                        <Input id='password' type='password' placeholder='Password' required {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="outline" className='w-full'>
                            Sign In
                        </Button>
                        <p className='text-center'>
                            Don&lsquo;t have an account?&nbsp;
                            <Link href='/signup' className='text-blue-300 hover:underline underline-offset-2'>
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Form>
        </Card>
    </main>
    )
}

export default LoginForm