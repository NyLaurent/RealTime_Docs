'use server'

import { clerkClient } from "@clerk/nextjs/server"

export const getClerkUSers= async({userIds}:{userIds:string[]})=>{

    try{
        const {data}= await clerkClient.users.getUserList({
            emailAddress:userIds,
        })
        
        const users = data.map((user)=>(
            {
                id:user.id,
                name: `${user.firstName} ${user.lastName}`,
                email:user.emailAddresses[0].emailAddress,
                avatar:user.imageUrl
            }
        ));
        const sortedUsers =



    }catch(error){
        console.log(`Error fetching users: ${error}`)
    }
}