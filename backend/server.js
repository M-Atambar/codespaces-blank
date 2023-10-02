const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello nodejs")
    // res.send("Hello Node App")
})


app.listen(8800,()=>{
    console.log("listening to port 8800");
})