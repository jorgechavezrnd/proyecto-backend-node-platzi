# proyecto-backend-node-platzi
Proyecto del Curso Práctico de NodeJS

### References
- Swagger editor: https://editor.swagger.io/
- JWT: https://jwt.io/
- Remote MySQL: https://remotemysql.com/
- pm2: https://pm2.keymetrics.io/

## Command for generate package.json file
- `npm init`

## Commands used for install dependencies
- `npm i express`
- `npm i body-parser`
- `npm i nanoid`
- `npm install -g nodemon`
- `npm i swagger-ui-express`
- `npm i jsonwebtoken`
- `npm i bcrypt`
- `npm i mysql`
- `npm i request`
- `npm i -g pm2`

## Commands for pm2
- Show active processes: `pm2 status`
- Show all logs: `pm2 logs`
- Show logs of one service: `pm2 logs ${serviceName or Id}`, example: `pm2 logs api-principal`
- Restart one service: `pm2 restart ${serviceNAme of Id}`, example: `pm2 restart api-mysql`
- Stop one service: `pm2 stop ${serviceNAme of Id}`, example: `pm2 stop api-post`
- Delete on service: `pm2 delete ${serviceNAme of Id}`, example: `pm2 delete api-post`

## Command for start api
- `pm2 start api/index.js --name api-principal`

## Command for start mysql microservice
- `pm2 start mysql/index.js --name api-mysql`

## Command for start post microservice
- `pm2 start post/index.js --name api-post`
