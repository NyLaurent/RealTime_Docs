'use server';
import { nanoid } from 'nanoid';
import { liveblocks } from '@/lib/liveblocks';
import { revalidatePath } from 'next/cache';
import { parseStringify } from '../utils';

// Define CreateDocumentParams with userId and email
interface CreateDocumentParams {
    userId: string;
    email: string;
}

// Define RoomAccesses to reflect typical access structures
interface RoomAccesses {
    [email: string]: string[]; // Ensure this matches the expected structure
}

export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = nanoid();

    try {
        // Metadata for the room
        const metadata = {
            creatorId: userId,
            email,
            title: "Untitled"
        };

        // User access rights
        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        };

        // Create room with liveblocks API
        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: ['room:write'] // Make sure this matches the expected format or omit if not needed
        });

        // Revalidate the path after creation
        revalidatePath('/');

        // Return parsed room data
        return parseStringify(room);

    } catch (error) {
        console.error(`Error occurred while creating a room: ${error}`);
        throw error; // Optionally rethrow the error if needed
    }
};
