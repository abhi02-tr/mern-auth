import User from "../model/user.model.js";
import generateToken from "../util/generateWebToken.js";

// @desc    Auth user / set Token
// route    POST /api/user/auth
// @access  public
const authUser = async (req, res) => {
    res.status(200).json({ message: "Auth user" });
};


// @desc    Register user / set Token
// route    POST /api/user
// @access  public
const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({email});
    
    if(userExists) {
        res.status(400);
        return next(new Error('User already exists.'));
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateToken(res, user._id);
        res.status(201).json({
            user
        });
    } else {
        res.status(400);
        throw new Error("Invalid data.");
    }

    res.status(200).json({ message: "register user" });
};


// @desc    Log out user
// route    POST /api/user/logout  
// @access  public
const logoutUser = async (req, res) => {
    res.status(200).json({ message: "Logout user" });
};


// @desc    Get user
// route    GET /api/user
// @access  public
const getUser = async (req, res, next) => {
    
    res.status(200).json({ message: "Get user" });
};


// @desc    Get use profile
// route    GET  /api/user/profile
// @access  Private
const getUserProfile = async (req, res) => {
    res.status(200).json({ message: "get user profile." });
};

// @desc    Update user
// route    PUT /api/user/profile
// @access  private
const updateUserProfile = async (req, res) => {
    res.status(200).json({ message: "Update User" });
};

export { authUser, getUser, logoutUser, registerUser, getUserProfile, updateUserProfile };