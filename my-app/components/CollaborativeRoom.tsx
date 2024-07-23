'use client'

import { RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut, SignInButton, UserButton, SignedIn } from '@clerk/nextjs'

const initialStorage = {
  id: "unique-id", // Replace with your unique id
  name: "User Name", // Replace with the user name
  email: "user@example.com", // Replace with the user email
  avatar: "https://example.com/avatar.png", // Replace with the user avatar URL
  color: "blue" // Replace with the user's color preference
}

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room" initialStorage={initialStorage}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className='collaborative-room'>
          <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
              <p className='document-title'>Share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
