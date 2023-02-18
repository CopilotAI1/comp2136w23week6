const express = require("express");
const path= require("path");

const app = express();

const PORT = 3001;

app.use(express.static("public"));

app.listen(PORT, ()=>{
    console.log("App listening on port #"+ PORT);
})

app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"Profile.html"));
});