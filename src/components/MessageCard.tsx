import { cn, fetchRecentMessage } from '@/lib/utils'
import User from '@/models/User'
import Image from 'next/image'
import React from 'react'

const MessageCard = ({ contact, active, onClick }: { contact: User, active?: boolean, onClick?: () => void }) => {
    return (
        <div className={cn('flex gap-3 p-3 border-b cursor-pointer', active ? 'bg-sky-800 border-sky-800' : 'bg-slate-800 border-slate-700 hover:bg-slate-700')}
            onClick={onClick}>
            
            <Image src={contact.avatarUrl} width={40} height={40} alt='Chatterly Logo' className='h-12 w-12 rounded-full' />
            
            <div className='w-full'>
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