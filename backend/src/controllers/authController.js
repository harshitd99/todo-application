const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateToken } = require("../utils/jwt");


const signup = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "user already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        const { password:_, ...userWithoutPassword } = user.toObject();

        return res.status(201).json({
            success: true,
            message: "user created successfully",
            data: userWithoutPassword
        });

    } catch (error) {
        console.error("Signup Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
         
        const token = generateToken(
            {
            id: user._id
            }
        );

        // Remove password before sending user data
        const { password: _, ...userWithoutPassword } = user.toObject();       

        return res.status(200).json({
            success: true,
            message: "Login successfull",
            token,
            data: userWithoutPassword
        });

    } catch (error) {
        console.error("Login Error:", error);
        
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    signup,
    login
};