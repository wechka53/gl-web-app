GL web app:
------------
[![CircleCI](https://circleci.com/gh/wechka53/gl-web-app/tree/master.svg?style=shield)](https://circleci.com/gh/wechka53/gl-web-app/tree/master)
### Requirements:
   - [docker](https://www.docker.com/)

#### Technologies stack:
   - [React.js](https://reactjs.org)   
   - [nginx](https://nginx.org/ru/docs/)
   
### Quick start:

Run `docker-compose up -d`

App will be available at localhost:80

### Troubleshoot:

If you see an error `ERROR: Network ethernet declared as external, but could not be found.`
Simple run `docker network create ethernet` and try again.
   