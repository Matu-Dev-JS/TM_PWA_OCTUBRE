SI queremos que se ejecute automaticamente los cambios al guardar mi codigo

FORMA MAS NUEVA
USANDO node --watch
{
  "name": "clase-11",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "node --watch index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


FORMA mas vieja, moderna, tradicional 🤠

npm i -D nodemon
{
  "name": "clase-11",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}