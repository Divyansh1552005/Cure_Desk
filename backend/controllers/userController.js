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

// api for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const user = await userModel.findOne({ email });

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // check validity of password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // generate token
        const token = jwt.sign({
            id : user._id
        }, process.env.JWT_SECRET, { expiresIn: '1d' });


        res.status(200).json({
            success: true,
            token
        });



    } catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }

}


export {registerUser, loginUser};

