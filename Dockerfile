FROM alpine as base
RUN apk add --update nodejs npm

#Build Step
FROM base as build
# COPY files
WORKDIR /app
COPY package*.json ./
COPY .env .

# Build steps
RUN npm i
COPY . .
RUN npm run build

#Final Step
FROM base as final
# COPY files
WORKDIR /app
COPY package.json .
COPY .env .
RUN npm i --only=production
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "start:prod"]