'use client';

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { createDocument } from '@/lib/actions/room.actions';
import { useRouter } from 'next/router';


interface AddDocumentBtnProps {
  userId: string;
  email: string;
}

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter();


   
    
    const addDocumentHandler = async () => {
        
        
        try {
            const room = await createDocument({ userId, email });
            if (room) {
                router.push(`/documents/${room.id}`);
            }
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };

    return (
        <div>
            <Button 
                type='submit'  // 'button' type for a non-form button
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
