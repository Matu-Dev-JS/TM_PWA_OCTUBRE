npm init -y

en el package.json agregar el "type": "module" y en los scripts agregar "dev": "node --watch server.js"

{
  "name": "express-intro",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.1"
  }
}

npm i express