# 1st stage
FROM oven/bun:1 AS builder

WORKDIR /app
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

#-- 2nd stage
FROM oven/bun:1 AS production

WORKDIR /app
COPY --from=builder /app/dist ./dist

EXPOSE 8503
CMD ["bun", "x", "serve", "dist", "-l", "8503"]
