

//pass=SDY68px30vSrUHVQ

const express=require("express");
const mongoose=require("mongoose");
const router = require("./Route/feedbackRoutes"); 

const app = express();

//Middleware
app.use(express.json());
app.use("/users",router);
 

mongoose.connect("mongodb+srv://feedback:SDY68px30vSrUHVQ@cluster0.j4lb0.mongodb.net/")
.then(()=> console.log("Connect to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));

