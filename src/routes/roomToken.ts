import Router from "koa-router";
import roomTokenController from "../controller/roomToken-Controller";

export const roomToken = new Router();

roomToken.get("/account", roomTokenController.getRoomToken);
