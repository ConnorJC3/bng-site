FROM docker.io/node:erbium as builder

WORKDIR /app

ENV NODE_ENV production

ADD package.json . 

ADD yarn.lock . 

RUN yarn install

ADD . .

RUN yarn build

RUN yarn export

FROM docker.io/nginxinc/nginx-unprivileged:1.19-alpine

COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/out/ /usr/share/nginx/html/
