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

## Commands for deploy on virtual machine with ubuntu (after connect with ssh)
- Go to home folder:
    - `cd ~`
- Install node:
    - `curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh`
    - `sudo bash nodesource_setup.sh`
    - `sudo apt-get install -y nodejs`
- Install git:
    - `sudo apt-get intall git`
- Install PM2:
    - `sudo npm install -g pm2`
- Delete 'nodesource_setup.sh' file:
    - `rm nodesource_setup.sh`
- Clone repository with source code:
    - `git clone https://github.com/jorgechavezrnd/proyecto-backend-node-platzi.git`
- Install dependencies:
    - `cd proyecto-backend-node-platzi`
    - `npm install`
- Start services with pm2:
    - `pm2 start mysql/index.js --name api-mysql`
    - `pm2 start cache/index.js --name api-cache`
    - `pm2 start api/index.js --name api-principal`
    - `pm2 start post/index.js --name api-post`
- Show status:
    - `pm2 status`
- Show logs:
    - `pm2 logs`

## Nginx
- Install: `sudo apt-get install nginx`
- Start service: `sudo service nginx start`
- To be sure about service is running, go to http://192.168.183.130/ where "192.168.183.130" is the IP if the virtual machine
- Stop service: `sudo service nginx stop`
- Modify configuration for nginx: `sudo nano /etc/nginx/sites-available/default`
- Add this lines to the file "default", after "location / {...":
```
location /api/user {
    proxy_pass http://localhost:3000;
}
location /api/auth {
    proxy_pass http://localhost:3000;
}
location /api/post {
    proxy_pass http://localhost:3002;
}
```
- Restart nginx service: `sudo service nginx restart`
- URLs for test server (where "192.168.183.130" is the IP of the server):
    - http://192.168.183.130/api/user
    - http://192.168.183.130/api/post
