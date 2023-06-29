import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/test'

async function main () {
    try{
        await mongoose.connect(url)
    }catch(err){
        console.error(err)
    }
}
export {main}