import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'

const app = express();

//middleware for handling parsing request body
app.use(express.json());

//middleware for handling cors policy
// app.use(cors());         // method one
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.get('/', (req,res) => {
    return res.status(200).send("Welcome to Book Store")
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

