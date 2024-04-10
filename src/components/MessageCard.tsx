import { cn, fetchRecentMessage } from '@/lib/utils'
import User from '@/models/User'
import Image from 'next/image'
import React from 'react'

const MessageCard = ({ contact, active, onClick }: { contact: User, active?: boolean, onClick?: () => void }) => {
    return (
        <div className={cn('flex gap-3 p-3 border-b cursor-pointer', active ? 'bg-sky-800 border-sky-800' : 'bg-slate-800 border-slate-700 hover:bg-slate-700')}
            onClick={onClick}>
            
            <div className='relative h-12 w-12'>
                <Image src={contact.avatarUrl} width={40} height={40} alt='Chatterly Logo'
                    className='h-12 w-12 rounded-full shadow shadow-slate-900' />

                <div className={cn('absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px]', active ? 'border-sky-800' : 'border-slate-800' , contact.isOnline ? 'bg-green-500' : 'bg-gray-500')}></div>
            </div>
            
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h1 className='text-base'>{contact.name}</h1>
                    <p className={cn('text-sm', active ? 'text-white' : 'text-gray-400')}>{fetchRecentMessage(contact.id).timeSent}</p>
                </div>
                <p className={cn('text-sm', active ? 'text-white' : 'text-gray-400')}>{fetchRecentMessage(contact.id).content}</p>
            </div>
        </div>
    )
}

export default MessageCard