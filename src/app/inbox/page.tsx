"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import { Search, SquarePen, X } from 'lucide-react'
import MessageCard from '@/components/MessageCard'
import User from '@/models/User'

const testData: User[] = [
    { id: '1', username: '@edogawa', name: 'Edogawa', avatarUrl: 'https://i.pravatar.cc/300?img=1', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '2', username: '@andox', name: 'Karl', avatarUrl: 'https://i.pravatar.cc/300?img=2', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '3', username: '@zhacmadic', name: 'Al-V', avatarUrl: 'https://i.pravatar.cc/300?img=3', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '4', username: '@yugen', name: 'Yugen', avatarUrl: 'https://i.pravatar.cc/300?img=4', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '5', username: '@jocel', name: 'Jocel', avatarUrl: 'https://i.pravatar.cc/300?img=5', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '6', username: '@joml', name: 'Jomel', avatarUrl: 'https://i.pravatar.cc/300?img=6', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '7', username: '@jocel', name: 'Jaja Coleen', avatarUrl: 'https://i.pravatar.cc/300?img=7', dateJoined: new Date(), lastLogin: new Date(), isOnline: true },
    { id: '8', username: '@jocel', name: 'Wallahi', avatarUrl: 'https://i.pravatar.cc/300?img=8', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '9', username: '@jocel', name: 'Wallahi', avatarUrl: 'https://i.pravatar.cc/300?img=8', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '10', username: '@jocel', name: 'Wallahi', avatarUrl: 'https://i.pravatar.cc/300?img=8', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '11', username: '@jocel', name: 'Wallahi', avatarUrl: 'https://i.pravatar.cc/300?img=8', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
    { id: '12', username: '@jocel', name: 'asdf', avatarUrl: 'https://i.pravatar.cc/300?img=12', dateJoined: new Date(), lastLogin: new Date(), isOnline: false },
]

const Sidebar = () => {
    const [activeContactId, setActiveContactId] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleContactClick = (contactId: string) => {
        setActiveContactId(contactId);
    };

    const filteredContacts = testData.filter((contact) => {
        // filter through contact name or username
        return contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.username.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchQuery(event.target.value);
    };

    const handleSearchClear = () => {
        setSearchQuery('');
    };

    return (
        <div className='text-gray-100'>
            <div className="sidebar flex flex-col w-80 h-screen bg-slate-800 border-r border-slate-700">
                <div className='flex p-3 flex-col gap-3 border-b border-slate-700'>
                    <div className='flex h-10 items-center justify-between'>
                        <h1 className='text-xl'>Inbox</h1>
                        <Button className='p-3' variant={'outline'}><SquarePen className='w-5 h-5' /></Button>
                    </div>
                    <div className='relative flex items-center'>
                        <Search className='absolute top-2 left-2' />
                        <Input type='text' placeholder='Search' className='pl-10 pr-8' onChange={handleSearchChange} value={searchQuery} />
                        {searchQuery.length > 0 && (
                            <X className='absolute top-[.65rem] right-2 h-5 w-5 cursor-pointer rounded-full text-gray-400 hover:text-white' onClick={handleSearchClear} />
                        )}
                    </div>
                </div>

                <div className='select-none overflow-y-auto flex-1'>
                    {filteredContacts.map((contact) => (
                        <MessageCard
                            key={contact.id}
                            contact={contact}
                            active={activeContactId === contact.id}
                            onClick={() => handleContactClick(contact.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar