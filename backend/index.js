import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import router from './routes/books.js';

const app = express();

app.use(express.json());
app.use('/', router);

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

