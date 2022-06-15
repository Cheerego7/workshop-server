import Koa from "koa"
import bodyParser from "koa-bodyparser";
import ratelimit from "koa-ratelimit";
import koaCors from "@koa/cors";

import { SERVER_PORT, validDomains } from "./config";
import { roomToken } from "./routes/roomToken";
import { checkOrigin } from "./middleware/checkOrigin";

const app = new Koa();

const db = new Map();

app.use(
    ratelimit({
        driver: "memory",
        db,
        duration: 10 * 60 * 1000,
        errorMessage: "You have exceeded the 100 requests in 10 minutes limit!",
        id: (ctx) => ctx.ip,
        headers: {
            remaining: "100",
            total: "10",
            reset: "Rate-Limit-Reset",
        },
        max: 100,
        disableHeader: false,
    })
);

app.use(checkOrigin);

app.use(
    koaCors({
        origin: (ctx): string => {
            if (
                ctx.request.header.origin &&
                validDomains.indexOf(ctx.request.header.origin) !== -1
            ) {
                return ctx.request.header.origin;
            }
            return validDomains[0];
        },
    })
);

// Routes
app.use(roomToken.routes());
app.use(roomToken.allowedMethods());

app.use(bodyParser());
app.listen(parseInt(SERVER_PORT) || 3000);

console.log(`app star success port: ${SERVER_PORT}`);
