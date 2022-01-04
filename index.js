const express = require('express');
const  mongoose  = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const facultyRoutes = require ("./routes/faculty");
 
dotenv.config();
 





app.get('/',(req,res) =>{
    res.send("hello world");

});
app.get('/faculty',(req,res)=>{
    res.send('faculties');
});

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser:true},()=> console.log('connected to db !')
    );




app.use(express.json());
app.use(cors());

app.use("/api/faculty",facultyRoutes);

app.listen(3000);