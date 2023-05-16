// @desc    Auth user / set Token
// route    POST /api/user/auth
// @access  public
const authUser = async (req, res) => {
    res.status(200).json({message: "Auth user"});
};


// @desc    Register user / set Token
// route    POST /api/user
// @access  public
const registerUser = async (req, res) => {
    res.status(200).json({message: "register user"});
};


// @desc    Log out user
// route    POST /api/user/logout
// @access  public
const logoutUser = async (req, res) => {
    res.status(200).json({message: "Logout user"});
};


// @desc    Get user
// route    GET /api/user
// @access  public
const getUser = async (req, res) => {
    res.status(200).json({message: "Get user"});
};

export { authUser, getUser, logoutUser, registerUser };