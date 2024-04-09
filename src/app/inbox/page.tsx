import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

import { Search, SquarePen } from 'lucide-react'

const page = () => {
  return (
    <div className='text-gray-100'>
        <div className="sidebar w-80 h-screen bg-slate-800 border-r border-slate-700">
            <div className='flex p-3 flex-col gap-3 border-b border-slate-700'>
                <div className='flex h-10 items-center justify-between'>
                    <h1 className='text-xl'>Inbox</h1>
                    <Button className='p-3' variant={'outline'}><SquarePen className='w-5 h-5' /></Button>
                </div>
                <div className='relative'>
                    <Search className='absolute top-2 left-2' />
                    <Input type='text' placeholder='Search' className='pl-10' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page