
import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }

}, {
    timestamps: true
});