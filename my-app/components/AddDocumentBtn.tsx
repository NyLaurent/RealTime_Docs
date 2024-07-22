'use client';

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { createDocument } from '@/lib/actions/room.actions';

interface AddDocumentBtnProps {
  userId: string;
  email: string;
}

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const addDocumentHandler = async () => {
    try {
      createDocument({userId,email})
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button 
        type='submit' 
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
