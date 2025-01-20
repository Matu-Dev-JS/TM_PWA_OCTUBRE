import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'

const pool = mysql.createPool({
    host: ENVIROMENT.MYSQL.HOST,
    user: ENVIROMENT.MYSQL.USERNAME,
    password: ENVIROMENT.MYSQL.PASSWORD,
    database: ENVIROMENT.MYSQL.DB_NAME
})

export default pool