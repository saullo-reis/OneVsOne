import mysql from 'mysql'

export const main = 
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'sistemadecadastro'
    })