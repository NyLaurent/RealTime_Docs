




'use client';

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { createDocument } from '@/lib/actions/room.actions';
import { useRouter } from 'next/navigation'; // Correct import

interface AddDocumentBtnProps {
  userId: string;
  email: string;
}

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter();
    
    const addDocumentHandler = async () => {
       try {
        console.log('Creating document with:', { userId, email });
        const room = await createDocument({ userId, email });
        console.log('Document created:', room);

        if (room && room.id) {
            console.log(`Redirecting to /documents/${room.id}`);
            router.push(`/documents/${room.id}`);
        } else {
            console.error('Room ID is missing:', room);
        }
    } catch (error) {
        console.error('Error creating document:', error);
    }
    };

    return (
        <div>
            <Button 
                type='button'  // Corrected type to 'button'
                onClick={addDocumentHandler}
                className='gradient-blue flex gap-1 shadow-md'
            >
                <Image 
                    src='/assets/icons/add.svg'
                    alt='add'
                    width={24}
                    height={24}
                />
                <p className='hidden sm:block'>
                    Start a blank document
                </p>
            </Button>
        </div>
    );
};

export default AddDocumentBtn;
