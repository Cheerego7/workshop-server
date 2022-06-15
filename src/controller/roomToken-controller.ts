import { Context } from "koa";

class RoomTokenController {
    public getRoomToken = (ctx: Context) => {
        ctx.body = {
            test: "hello world"
        }
    }
}

export default new RoomTokenController();
