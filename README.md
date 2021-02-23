# proyecto-backend-node-platzi
Proyecto del Curso Práctico de NodeJS

### References
- Swagger editor: https://editor.swagger.io/
- JWT: https://jwt.io/
- Remote MySQL: https://remotemysql.com/
- pm2: https://pm2.keymetrics.io/
- Vercel: https://vercel.com/
- Vercel secrets: https://vercel.com/docs/cli#commands/secrets
- Redislabs: https://redislabs.com/
- Upstash (for redis online): https://console.upstash.com/pages/overall

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
- `npm i -g vercel`
- `npm i redis`

## Commands for pm2
- Show active processes: `pm2 status`
- Show all logs: `pm2 logs`
- Show logs of one service: `pm2 logs ${serviceName or Id}`, example: `pm2 logs api-principal`
- Restart one service: `pm2 restart ${serviceNAme of Id}`, example: `pm2 restart api-mysql`
- Stop one service: `pm2 stop ${serviceNAme of Id}`, example: `pm2 stop api-post`
- Delete on service: `pm2 delete ${serviceNAme of Id}`, example: `pm2 delete api-post`

## Command for start redis with docker
- `docker run --name redis -d -p 6379:6379 redis redis-server --requirepass "SUPER_SECRET_PASSWORD"`
- Modify 'config.js' file with this data:
```
redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASS || 'SUPER_SECRET_PASSWORD'
}
```

## Command for vercel
- Deploy: `vercel .`
- Start server con local: `vercel dev`
- Add env variable with vercel secret: `vercel secret add ${var_name} ${var_value}` Example: `vercel secret add REMOTE_DB false`

## URL examples for deploy in vercel
- https://proyecto-backend-node-jorgechavezrnd.vercel.app/api/user
- https://proyecto-backend-node-jorgechavezrnd.vercel.app/api/post

## Command for start api
- `pm2 start api/index.js --name api-principal`

## Command for start mysql microservice
- `pm2 start mysql/index.js --name api-mysql`

## Command for start post microservice
- `pm2 start post/index.js --name api-post`
