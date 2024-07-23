import { useOthers } from '@liveblocks/react/suspense'
import React from 'react'

const ActiveCollaborators = () => {
    const others = useOthers();
  return (
    <div>ActiveCollaborators</div>
  )
}

export default ActiveCollaborators