const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const { validateRegisterInput, validateLoginInput } = require('../validator/user');

exports.registerUser = async (req, res) => {
    // Validate the input data
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({ email: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    console.log(newUser);

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
};

exports.loginUser = async (req, res) => {
    // Validate the input data
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ email: 'Email not found' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(401).json({ password: 'Incorrect password' });
    }

    // Generate JWT tokens
    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);

    // Save the refresh token to the database (optional)

    // Send the tokens to the client
    res.json({ message: "User Found", accessToken, refreshToken });
};

exports.refreshToken = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token is required' });
    }

    try {
        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        // Generate a new access token
        const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        res.json({ accessToken });
    } catch (err) {
        console.error(err);
        return res.status(403).json({ message: 'Invalid refresh token' });
    }
};

exports.getUserProfile = async (req, res) => {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
        return res.status(401).json({ message: 'Access token is required' });
    }

    try {
        // Verify the access token
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        // Find the user by ID
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(403).json({ message: 'Invalid access token' });
    }
};
