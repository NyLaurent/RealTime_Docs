'use server';
import { nanoid } from 'nanoid';
import { liveblocks } from '@/lib/liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';

// Ensure `createDocumentParams` and `RoomAccesses` are correctly defined somewhere in your codebase
interface CreateDocumentParams {
    userId: string;
    email: string;
}

interface RoomAccesses {
    [email: string]: string[];
}

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
        console.log(`Error happened while creating a room: ${error}`);
    }
};
