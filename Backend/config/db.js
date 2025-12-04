const mongoose = require('mongoose')
const colors = require("colors");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to mongoDB database ${mongoose.connection.host}`.bgCyan.magenta);
    } catch (error) {
       console.log(`MongoDB error ${error}`.bgRed.white) 
    }
}
module.exports=connectDB;