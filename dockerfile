FROM node:16

WORKDIR /usr/src

RUN npm install --global pnpm

# Files required by pnpm install
COPY package.json pnpm-lock.yaml tsconfig.json ./

RUN pnpm install --frozen-lockfile --prod && pnpm install typescript@^4.6.2

COPY ./dist ./dist

EXPOSE 80
CMD ["node", "dist/app.js"]
