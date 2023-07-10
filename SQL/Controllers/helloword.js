import { main } from "../DataBase/db.js"

export const helloWorld = (req, res) => {
    res.send('Hello World')
}

export const posts = (__, res) => {
    try{
        main.query('SELECT * FROM postagens WHERE id = 1;', function(err, results){
            if(err) throw err
            res.send(results)
        })
    }catch(err){
        console.error(err)
    }
}