const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors");
const app=express();
require("dotenv").config();

app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 8080;
const DATA=process.env.DATA;
console.log(DATA)
mongoose.connect(DATA).then(()=>{
    console.log('Database connected')
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`App Runing on port ${PORT}`)
})