import CollaborativeRoom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUSers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


const Document
 = async ({params:{id}} :SearchParamProps) => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId:id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });
  if(!room) redirect('/');

  const userIds = Object.keys(room.userAccesses)
  const users= await getClerkUSers({userIds})

  const userData= users.map((user:User)=>({
    ...user,
    userType:room.userAccesses[user.email]?.includes('room:write')
    ? 'editor'
    : 'viewer'

  }))
  const currentUserType = room.userAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write')? 'editor' :'viewer'


  return (
    <main>
       <CollaborativeRoom
       users={usersData}
       currentUserType={currentUserType}
       roomId={id}
       roomMetadata={room.metadata}/>
    </main>
     
        
   
  )
}

export default Document
