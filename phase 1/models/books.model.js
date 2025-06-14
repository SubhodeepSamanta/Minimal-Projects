import mongoose from 'mongoose'

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    published_year:{
        type:Number,
    }
})

const Books= mongoose.model("Books",BookSchema);

export default Books;