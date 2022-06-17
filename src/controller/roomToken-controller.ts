import { Context } from "koa";
import roomService from "../service/room-service";

class RoomTokenController {
    private roomService = new roomService();

    public createRoom = async (ctx: Context) => {
        const roomToken = this.roomService.createWhiteboardRoomToken();

        try {
            const roomUUID = await this.roomService.createWhiteboardRoom();
            ctx.body = {
                roomUUID,
                roomToken,
            };
        } catch (error) {
            ctx.status = 500;
            ctx.body = {
                errorMessage: error,
            };
        }
        
    }
}

export default new RoomTokenController();
