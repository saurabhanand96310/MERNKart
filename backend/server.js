import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
dotenv.config({path :'backend/config/config.env'});

const PORT= process.env.PORT || 8001

connectDB();

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
    
})
