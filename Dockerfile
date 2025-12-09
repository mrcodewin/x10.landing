FROM node:23 AS builder

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
ENV NUXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:23

WORKDIR /app
COPY --from=builder /app/.output ./.output
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", ".output/server/index.mjs"]
