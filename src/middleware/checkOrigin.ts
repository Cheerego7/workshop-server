import koa from "koa";
import { validDomains } from "../config";

export const checkOrigin = async (ctx: koa.Context, next: koa.Next): Promise<void> => {
    if (ctx.header.origin && validDomains.indexOf(ctx.header.origin) !== -1) {
        await next();
    } else {
        ctx.status = 403;
    }
};
