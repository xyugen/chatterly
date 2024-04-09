"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import { Search, SquarePen } from 'lucide-react'
import MessageCard from '@/components/MessageCard'
import User from '@/models/User'

const testData: User[] = [
    { id: '1', username: 'edogawa', name: 'Edogawa', avatarUrl: 'https://i.pravatar.cc/300?img=1', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '2', username: 'andox', name: 'Karl', avatarUrl: 'https://i.pravatar.cc/300?img=2', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '3', username: 'zhacmadic', name: 'Al-V', avatarUrl: 'https://i.pravatar.cc/300?img=3', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '4', username: 'yugen', name: 'Yugen', avatarUrl: 'https://i.pravatar.cc/300?img=4', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
]

const Sidebar = () => {
    const [activeContactId, setActiveContactId] = useState('');

    const handleClick = (contactId: string) => {
        setActiveContactId(contactId);
    };

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

                <div className='select-none'>
                    {testData.map((contact) => (
                        <MessageCard
                            key={contact.id}
                            contact={contact}
                            active={activeContactId === contact.id}
                            onClick={() => handleClick(contact.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar