import userModel from '../models/userModel.js';
import validator from "validator"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// api to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; 

        if(!name || !email || !password){
            res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({ success: false, message: "Please enter a valid email" })
        }

        // check if password length is less than 8
        if(password.length < 8){
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" })
        }

        // check if user already exists
        const existingUser = await userModel.findOne({ email });
        if(existingUser){
            return res.status(400).json({ success: false, message: "User already exists with this email" })
        }

        // create new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // _id use krke token generate krdo
        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token
        });




    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}



export {registerUser};

