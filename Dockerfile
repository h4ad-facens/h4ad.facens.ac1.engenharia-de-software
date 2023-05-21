FROM oven/bun as deps

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN bun install

FROM deps as code

COPY ./tsconfig.json /usr/app/
COPY ./src /usr/app/src

FROM code as run

ENTRYPOINT [ "bun", "run", "/usr/app/src/infra/bun.ts" ]
