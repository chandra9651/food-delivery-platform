const bcrypt = require("bcryptjs");
const User = require("../models/User");

const generateToken = require("../utils/generateToken");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check empty fields

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are require",
            });
        }

        //check existing user

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "user create successfully",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

// LOGIN

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required",
            });
        }

        // Find User
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            })
        }
        // Compare Password

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        res.status(200).json({
            message: "Login Successful",
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
};