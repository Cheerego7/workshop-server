import { Context } from "koa";
import roomService from "../service/room-service";

class RoomTokenController {
    private roomService = new roomService();

    public getRoomToken = (ctx: Context) => {
        const roomToken = this.roomService.getRoomToken();
        ctx.body = {
            roomToken,
        }
    }
}

export default new RoomTokenController();
