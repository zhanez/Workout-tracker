const express =require("express");
const app =express();
const PORT =process.env.PORT|| 3001;

// access CSS, Images, html... public as a homepage on url
app.use(express.static("public"));

// unwrap data from the client so you can use it in the server stores in req.body
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

const mongoose =require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost:workout");
