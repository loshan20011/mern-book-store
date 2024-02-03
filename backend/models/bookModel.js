import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required:true,
        },
    },
    {
        timestamps: true,
        // this is for handling update time operation
    }
)

export const Book = mongoose.model('Cat', bookSchema);