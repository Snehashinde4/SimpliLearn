import React from 'react'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Separator } from '@radix-ui/react-separator';

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-black min-h-screen'>
        <div className='max-w-3xl mx-auto p-10'>
            <div className="h-14"></div>
            <div className='flex justify-between items-center md:flex-row flex-col'>
            <div className='flex items-center'>
            <Link href="/">
         
            <Button className='bg-green-800 hover:bg-green-700 text-white'>
                <ArrowLeft className='mr-1 w-4 h-6'/>
                Back
                </Button>

            </Link>
            <div className='w-4'></div>
            <h1 className='text-3xl font-bold text-gray-200'>MY NOTES</h1>
            <div className='w-4'></div>
            <UserButton />
            </div>
            </div>

            <div className='h-10'></div>
<Separator/>
<div className="h-8"></div>
{/* list all notes here */}
{/* TODO conditionally rendered */}
<div className="text-center">
    <h2 className='text-xl text-gray-500'>You have no notes yet</h2>
    </div>
           </div>     
        </div>
  )
};

export default DashboardPage;