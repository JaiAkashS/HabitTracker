import mongoose from "mongoose";

const entry = new mongoose.Schema({
    diaryEntry:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true   
    },
    keybrStatus: {
        type: Boolean,
        required: true
    },
    keybrTimeSpent: {
        type: Number,
        required: true   
    },
    learnjavaStatus:{
        type: Boolean,
        required: true   
    },
    LearnjavaTimeSpent: {
        type: Number,
        required: true   
    },
    leetcodeStatus: {
        type: Boolean,
        required: true   
    },
    LeetcodeTimeSpent: {
        type: Number,
        required: true   
    }
})