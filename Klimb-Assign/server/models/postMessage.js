import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    dob: Number,
    experience: String,
    title: String,
    location: String,
    address: String,
    employer: String,
    designation: String


})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;