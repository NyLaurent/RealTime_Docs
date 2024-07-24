'use client'
import Loader from '@/components/Loader'
import { getClerkUSers } from '@/lib/actions/user.actions'

import {LiveblocksProvider,ClientSideSuspense} from '@liveblocks/react/suspense'
import { ReactNode } from 'react'

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth"
    resolveUsers={async({userIds})=>{
      const users= await getClerkUSers({userIds});
      return users;
    }}>
      
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
     
    </LiveblocksProvider>
  )
}

export default Provider