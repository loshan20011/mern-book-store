import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    console.log("varans");
    return res.status(234);
});



mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to mongo")
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
});

