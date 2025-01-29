const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3500

const allowedOrigins = ["http://127.0.0.1:5500", "https://google.com"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "PUT"],
    credentials: true
}));

app.get("/data",(req,res)=>{
    res.json({name : "Prabhakar", age : 29})
})

app.put("/data",(req,res)=>{
    res.json({name : "Prabhakar", age : 29})
})

app.listen(PORT,()=>{console.log(`Server is running on Port :${PORT}`)})