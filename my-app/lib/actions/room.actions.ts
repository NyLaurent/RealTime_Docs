'use server';
import { nanoid } from 'nanoid';
import { liveblocks } from '@/lib/liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';
import { access } from 'fs';




export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = nanoid();

    try {
      
        const metadata = {
            creatorId: userId,
            email,
            title: "Untitled"
        };

       
        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        };


        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: [] 
        });

        
        revalidatePath('/');

        
        return parseStringify(room);

    } catch (error) {
        console.error(`Error occurred while creating a room: ${error}`);
        throw error; 
    }
};

export const getDocument = async({roomId, userId}:{roomId:string;
    userId:string
})=>{

    try{
        const room= await liveblocks.getRoom(roomId);
        // const hasAccess = Object.keys(room.usersAccesses).includes(userId);
    
        // if(!hasAccess){
        //     throw new Error('You dont have access to this room');
    
        // }
        return parseStringify(room);
    }catch(error){
        console.log(`Error happened while getting a room: ${error}`)
    }
   
    
}

export const updateDocument = async (roomId:string, title:string)=>{
    try{

        const  updatedRoom = await liveblocks.updateRoom(roomId,{
            metadata:{
                title
            }
        })
        revalidatePath(`/documents/${roomId}`)
        return parseStringify(updatedRoom)


    }catch(error){
        console.log(`Error happened while updating a room: ${error}`)
    }
}



export const getDocuments = async( email:string
   
)=>{

    try{
        const rooms= await liveblocks.getRooms({userId: email});
      
        return parseStringify(rooms);
    }catch(error){
        console.log(`Error happened while getting rooms: ${error}`)
    }
   
    
}
