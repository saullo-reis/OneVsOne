import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/test'
const { Schema } = mongoose

async function main () {
    try{
        await mongoose.connect(url)
        console.log('Conectado a db')
    }catch(err){
        console.error(err)
    }
}

export {main}