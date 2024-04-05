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

const UserForm = ({ type }: { type: string }) => {
    const isLogin = type ? type === 'login': true;

    const formSchema = isLogin ? z.object({
        username: z
            .string({
                required_error: 'Username is required',
            })
            .min(2, { message: 'Username must be at least 2 characters' }),
        password: z
            .string({
                required_error: 'Password is required',
            })
            .min(2, { message: 'Password must be at least 2 characters' }),
    }) : z.object({
        username: z
            .string({
                required_error: 'Username is required',
            })
            .min(2, { message: 'Username must be at least 2 characters' }),
        password: z
            .string({
                required_error: 'Password is required',
            })
            .min(2, { message: 'Password must be at least 2 characters' }),
        confirmPassword: z
            .string({
                required_error: 'Confirm Password must match Password',
            })
            .min(2, { message: 'Confirm Password must match Password' }),
    })

    const defaultValues = isLogin ? {
        username: '',
        password: ''
    } : {
        username: '',
        password: '',
        confirmPassword: ''
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    })

    return (
    <main className='text-gray-100 px-6 md:px-0 mx-auto w-full sm:w-[500px] space-y-12'>
        <Card>
            <CardHeader>
                <CardTitle className='text-4xl bg-gradient-to-br font-bold p-1 from-blue-300 to-blue-500 text-transparent bg-clip-text text-center tracking-wide'>
                    {isLogin ? 'Login' : 'Sign Up'}
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
                        {!isLogin && (
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col gap-1'>
                                        <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input id='confirm-password' type='password' placeholder='Confirm password' required {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <Button type="submit" variant="outline" className='w-full'>
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                        <p className='text-center'>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <Link href={isLogin ? '/signup' : '/login'} className='text-blue-300 hover:underline underline-offset-2'>
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Form>
        </Card>
    </main>
  )
}

export default UserForm