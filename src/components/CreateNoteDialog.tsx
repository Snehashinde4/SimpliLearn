
'use client'
import { Plus } from 'lucide-react'
import React from 'react'
import { Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger } from './ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState('')
  return (
    <Dialog>
        <DialogTrigger>
           <div className='border-dashed border-2 border-ivory-600 h-full rounded-lg items-center text-center justify-center cursor-pointer sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
            <Plus className='w-8 h-8 text-white' strokeWidth={3}/>
            <h2 className='font-semibold text-white sm:mt-2'>Create Note</h2>

           </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                
                <DialogTitle>New Note</DialogTitle>
                    <DialogDescription>You can create a new note by clicking the button below</DialogDescription>
                </DialogHeader>
                <form>
                    <Input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter note title'/>
<div className='flex justify-between'>
<Button type='reset' variant={'secondary'}>Cancel</Button>
<Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition">
  Create
</Button>

<Button type='submit' variant={'default'}>submit</Button>

    </div>


</form>

        </DialogContent>
        </Dialog>
            
  );
}

export default CreateNoteDialog;