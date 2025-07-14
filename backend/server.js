import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config({path :'backend/config/config.env'});

const PORT= process.env.PORT || 8001


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
    
})
