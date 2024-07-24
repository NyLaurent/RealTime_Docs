'use client'

import { RoomProvider,ClientSideSuspense } from '@liveblocks/react/suspense'
import {Editor} from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut,SignInButton,UserButton,SignedIn } from '@clerk/nextjs'

import ActiveCollaborators from './ActiveCollaborators'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">

        <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className='collaborative-room'>


        <Header>
        <div className='flex w-fit items-center justify-center
        gap-2'>
          <p className='document-title'>Share</p>
        </div>
        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>

          <ActiveCollaborators/>

          <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>

      
      </Header>
      <Editor/>
        </div>
          
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom

