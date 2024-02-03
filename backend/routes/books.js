import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.get('/books', async (req, res) => {
    try{
        const books = await Book.find();
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }catch(error){
        console.error(error.message);
        res.status(500).json(
            {
                message: error.message
            }
        )
    }
});

router.get('/books/:id', async (req, res) => {
    try{
        const books = await Book.findById(req.params.id);
        return res.status(500).json(books)
    }catch(error){
        console.error(error.message);
        res.status(500).json(
            {
                message: error.message
            }
        )
    }
});


router.post('/books', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).json(book); // Respond with the created book
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            message: error.message,
        });
    }
});


export default router;