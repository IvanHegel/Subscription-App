import mongoose, { Schema } from "mongoose";


const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
      
    },
    imageUrl: {
        type: String,
        required: true,
        min: 5
    },
    content: {
        type: String,
        required: true,
    },
access: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    required: true,
},

});

export default mongoose.model("Article", articleSchema);