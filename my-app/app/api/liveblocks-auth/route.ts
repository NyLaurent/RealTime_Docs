
import {liveblocks} from "@/lib/liveblocks"
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { colors } from "@clerk/themes/dist/clerk-js/src/ui/foundations/colors";
import { redirect } from "next/dist/server/api-utils";


export async function POST(request: Request) {
    const clerkUser = await currentUser();

    if(!clerkUser) redirect('/sign-in');
    const{
        id, firstName,lastName, emailAdresses,imageUrl
    }= clerkUser;

    const user ={
        id,
        info:{
            id,
            name:`${firstName} ${lastName}`,
            email: emailAdresses[0].emailAdress,
            avatar:imageUrl,
            color:getUserColor(id),

        }
    }

  // Get the current user from your database
 
  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds:[]
    },
    { userInfo: user.info},
  );

  return new Response(body, { status });
}