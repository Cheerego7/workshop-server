import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const {
    SERVER_PORT,
    NETLESS_ACCESS_KEY,
    NETLESS_SECRET_ACCESS_KEY,
} = process.env;

export const validDomains = ["https://workshop.netless.link", "http://localhost:3000"];
