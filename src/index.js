const express  = require("express");
const app = express();

app.get("/test",(req,res)=>{
  res.send("hey testing completed")
});

app.listen(3028,()=>{
  console.log(`Server is listening at port : 3028`)
})