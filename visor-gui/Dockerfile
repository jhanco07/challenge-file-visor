# Etapa 1: Construir la aplicación de React
FROM node:16-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY public ./public 

COPY . .

RUN npm run build

# Etapa 2: Crear la imagen para producción
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json /app/package-lock.json ./

RUN npm install --production

EXPOSE 3001

CMD ["npm", "start"]
