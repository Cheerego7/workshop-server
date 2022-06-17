
import axios from "axios";
import { v4 } from "uuid";
import { createWhiteboardRoomToken, createWhiteboardSDKToken } from "../utils/NetlessToken";

export default class roomService {
    public createWhiteboardRoomToken() {
        const whiteboardRoomUUID = v4();
        return createWhiteboardRoomToken(whiteboardRoomUUID);
    }

    public async createWhiteboardRoom(limit = 0): Promise<string> {
        const {
            data: { uuid }
        } = await axios.post<Room>(
            "https://api.netless.link/v5/rooms",
            {
                isRecord: true,
                limit,
            },
            {
                headers: {
                    token: createWhiteboardSDKToken(),
                    region: "cn-hz",
                },
            }
        );
        
        return uuid;
    }
}

interface Room {
    uuid: string;
    name: string;
    teamUUID: string;
    isRecord: boolean;
    isBan: boolean;
    limit: number;
    createdAt: string;
}
