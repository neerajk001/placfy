import mongoose from "mongoose";



const connectDb  = async()=>{
    try{
      const dbConnect  = await mongoose.connect(process.env.MONGO_URL);
      console.log(`connected to Mongodb ${dbConnect.connection.host}`)
    }catch(error){
        console.log(error)
    }
}

export default connectDb;  