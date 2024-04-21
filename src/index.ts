import express from "express";

const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.json({
        health : "100%",
        state : "running"
    });
})

app.listen(3000,() => {
    console.log("running on port 3000");
})