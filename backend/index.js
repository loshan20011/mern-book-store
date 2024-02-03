import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());
app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send("Welcome to Book Store")
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to mongo");
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Add error handling for express app setup
app.on('error', (err) => {
    console.error('Express App Error:', err.message);
});

