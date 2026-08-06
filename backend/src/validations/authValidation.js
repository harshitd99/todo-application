const validateSignup = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            Message: "All fields required"
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            mesage: "Password must be atleast 6 charecters"
        });
    }

    next();
};

const validateLogin = (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });

    }

    next();

};

module.exports = {
    validateSignup,
    validateLogin
};