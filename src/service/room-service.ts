import { v4 } from "uuid";
import { createWhiteboardRoomToken } from "../utils/NetlessToken";

export default class roomService {
    public getRoomToken() {
        const whiteboardRoomUUID = v4();
        return createWhiteboardRoomToken(whiteboardRoomUUID);
    }
}
