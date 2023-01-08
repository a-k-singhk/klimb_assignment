import express from 'express';
import mongoose from 'mongoose';
import async from 'async'

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const createPost = async (req, res) => {
    var dataa = req.body;
    const dataaa = dataa.filter((dataa, index, self) => index === self.findIndex((dup) => dup.Email === dataa.Email))
    console.log(dataaa);


    try {
        async.eachSeries(dataa, async function (data, outdata) {
            const User = new PostMessage({
                name: data['Name of the Candidate'],
                email: data['Email'],
                mobile: data['Mobile No.'],
                dob: data['Date of Birth'],
                experience: data['Work Experience'],
                title: data['Resume Title'],
                location: data['Current Location'],
                address: data['Postal Address'],
                employer: data['Current Employer'],
                designation: data['Current Designation']
            })
            const present = await PostMessage.find({ email: data['Email'] });
            console.log(present.length);
            if (present.length) {

            }
            else {

                await User.save();
            }
            // console.log("h4");
        })

        console.log("done");


    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;