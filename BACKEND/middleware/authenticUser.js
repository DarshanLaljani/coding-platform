// Middleware to authenticate users and retrieve the user ID
module.exports = authenticateUser = (req, res, next) => {
    // Your authentication logic here to extract the user ID from the request
    const userId = req.user._id; // Assuming you have this available after authentication
    req.userId = userId; // Attach the user ID to the request object
    next();
};